// src/App.js or src/App.jsx
import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'; // Use named import for Tooltip
import fetchGitHubContributions from './fetchGithubData';
import './App.css';
import axios from 'axios';

const App = () => {
  const [heatmapValues, setHeatmapValues] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [totalRepos, setTotalRepos] = useState(0);

  useEffect(() => {
    const username = 'happyrao78'; // Replace with the desired GitHub username
    const token = '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'; // Replace with your GitHub personal access token

    fetchGitHubContributions(username, token).then(data => {
      setHeatmapValues(data);

      // Calculate total contributions
      const total = data.reduce((sum, day) => sum + day.count, 0);
      setTotalContributions(total);

      // Calculate max streak
      let currentStreak = 0;
      let maxStreak = 0;
      data.forEach(day => {
        if (day.count > 0) {
          currentStreak++;
          if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
          }
        } else {
          currentStreak = 0;
        }
      });
      setMaxStreak(maxStreak);
    });

    // Fetch total repos
    axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      setTotalRepos(response.data.length);
    }).catch(error => {
      console.error('Error fetching repos:', error);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Contributions Heatmap</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Total Repositories</h2>
          <p className="text-2xl">{totalRepos}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Total Contributions</h2>
          <p className="text-2xl">{totalContributions}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold">Max Streak</h2>
          <p className="text-2xl">{maxStreak}</p>
        </div>
      </div>
      <div className="overflow-x-auto gap-x-5">
        <CalendarHeatmap
          startDate={new Date("2024-01-01")}
          endDate={new Date()}
          values={heatmapValues}
          classForValue={value => {
            if (!value || value.count === 0) {
              return 'color-empty';
            }
            return `color-github-${Math.min(value.count, 4)}`;
          }}
          tooltipDataAttrs={value => {
            return {
              'data-tip': value ? `${value.date} has ${value.count} contributions` : 'No contributions'
            };
          }}
          horizontal={true}
          gutterSize={2}
          gap={10}
          rounding={true}
          // borderColor="#212121"
          length={30}
          
       
          // showOutOfRangeDays
        />
        <ReactTooltip />
      </div>
    </div>
  );
};

export default App;
