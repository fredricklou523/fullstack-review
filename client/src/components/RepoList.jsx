import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
      <table>
      	<tbody>
	      	<tr>
	        	<th>name</th>
	        	<th>html_url</th>
	        </tr>
        	{props.repos.map(repo => <RepoListEntry repo={repo}/>)}
        </tbody>
      </table>
  </div>
)

export default RepoList;