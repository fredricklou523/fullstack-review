import React from 'react';

const RepoListEntry = (props) => (
  <tr>
    <td>{props.repo.name}</td>
    <td>{props.repo.html_url}</td>
  </tr>
)

export default RepoListEntry;