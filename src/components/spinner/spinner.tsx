import './spinkit.min.css';
import './spinner.scss';

export const Spinner = () => {
	return (
		<div className="spinner-container">
			<div className="sk-chase sk-center">
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
			</div>
		</div>
	)
}
