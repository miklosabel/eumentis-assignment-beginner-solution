
export const Avatar = (props: { seed: string }) => {

	return (
		<div className="col-avatar">
			<img
				src={`https://avatars.dicebear.com/v2/avataaars/${props.seed}.svg?options[mood][]=happyusername}}.svg?options[mood][]=happy
`} alt='avatar'
				style={{ width: 200, height: 200 }}
			/>
		</div>
	)
}