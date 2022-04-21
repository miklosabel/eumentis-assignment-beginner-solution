import React from 'react';
import { IUser } from '../interface';

export const User = (props: {userData: IUser}) => {

	const userData = props.userData;

	return <div key={userData.id}>{userData.name}</div>
}
