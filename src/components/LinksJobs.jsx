// CSS
import './LinksJobs.css';

// Data
import { jobs } from '../assets/data/jobs.js';

const LinksJobs = () => {
	return (
		<div className="links-jobs">
			<ul>
        {jobs.map((job) => (
          <li key={job.id} id={job.id_name}>
            <a href={job.href} target="_blank" rel="noreferrer">{job.tech}</a>
          </li>
        ))}
      </ul>
		</div>
	);
};

export default LinksJobs;
