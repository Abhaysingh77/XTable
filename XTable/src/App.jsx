import React from "react";

function App() {
  const [tableData, setData] = React.useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);
  const handleSortByDate = () => {
    setData((prev) => {
      const sortedData = [...prev].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      return sortedData;
    });
  };
  const handleSortByViews = () => {
    setData((prev) => {
      const sortedData = [...prev].sort(
        (a, b) => new Date(a.views) - new Date(b.views)
      );
      return sortedData;
    });
  };
  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>

          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
}

export default App;
