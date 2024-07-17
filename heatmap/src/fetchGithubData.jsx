// src/fetchGitHubData.js
import axios from 'axios';

const fetchGitHubContributions = async (username, token) => {
  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const response = await axios.post(
    'https://api.github.com/graphql',
    { query, variables: { username } },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const weeks = response.data.data.user.contributionsCollection.contributionCalendar.weeks;
  const contributions = [];
  weeks.forEach(week => {
    week.contributionDays.forEach(day => {
      contributions.push({
        date: day.date,
        count: day.contributionCount,
      });
    });
  });

  return contributions;
};

export default fetchGitHubContributions;
