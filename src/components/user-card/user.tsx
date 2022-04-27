import React from 'react';
import { IUser } from '../../interface';
import { Avatar } from './components/avatar';
import './user.scss';

export const User = (props: { userData: IUser }) => {

	const userData = props.userData;

	return (
		<div className='user-card' key={userData.id}>
			<div className="row">
				<Avatar seed={userData.username}/>
				<div className='col-data'>
					<h2 className='title'>
						{userData.name}
					</h2>
					<div className='user-data-line'>
						<strong>Email:</strong>{' ' + userData.email}
					</div>
					<div className='user-data-line'>
						<strong>Phone:</strong>{' ' + userData.phone}
					</div>
					<div className='user-data-line'>
						<strong>Company:</strong>{' ' + userData.company.name}
					</div>
					<div className='user-data-line'>
						<strong>Website:</strong>{' ' + userData.website}
					</div>
					<div className='user-data-line'>
						<strong>Address:</strong>{
							' ' + userData.address.street + ', ' +
							userData.address.suite + ', ' +
							userData.address.city + ', ' +
							userData.address.zipcode
						}
					</div>
				</div>
			</div>
		</div>)
}
