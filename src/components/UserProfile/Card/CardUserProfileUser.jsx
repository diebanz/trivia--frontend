import {useState, useEffect, useRef} from 'react';
import axios from 'axios';

import {FaEdit} from 'react-icons/fa';

import {flags} from '../../../common/flags.js';
import {validation} from '../../../common/inputValidation.js';
import classes from './../../../sass/components/UserProfile/Card/CardUser.module.scss';

function CardUserProfileUser() {
	const [data, setData] = useState();
	const [nat, setNat] = useState();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [edit, setEdit] = useState(false);
	const selectRef = useRef();

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${process.env.REACT_APP_BACKEND}/user/tobi`);
			if (response.data.message === 'success') {
            setData(response.data.payload);
            setUsername(response.data.payload.username);
            setEmail(response.data.payload.email ? response.data.payload.email : 'enter your email here');
         }
		})();
	}, [nat]);

	const inputChangeHandler = ({name, value}) => {
      name === 'username' ? setUsername(value) : setEmail(value);
   }

	const flagChangeHandler = async(key) => {
		try {
         selectRef.current.style.visibility = 'collapse';
			const update = await axios.patch(`${process.env.REACT_APP_BACKEND}/user/tobi`, {updates: {nat: key}});
			setNat(data.nat);
		} catch (err) {}
	}

	const openFlagsHandler = () => {
		if (selectRef.current.style.visibility === 'visible') return (selectRef.current.style.visibility = 'collapse');
		selectRef.current.style.visibility = 'visible';
	};

	return (
		<section className={classes.profile__user}>
			<div className={classes['profile__user--piccontainer']}>
				<div
					className={classes['profile__user--pic']}
					style={{
						background: `url(${data && data.img}) center / cover no-repeat`,
					}}
				>
					<div
						className={classes['profile__user--pic__flag']}
						style={{
                     cursor: edit ? 'pointer': 'default',
                     pointerEvents: edit ? 'auto' : 'none',
							background: `url('https://flagcdn.com/64x48/${data && data.nat}.png') center / cover no-repeat`,
						}}
						onClick={openFlagsHandler}
					>
						<div className={classes.flagSelection} ref={selectRef}>
							{Object.keys(flags).map((flag, i) => (
								<label key={flag}>
									<input
										type='radio'
										name='nation'
										value={flag}
										onChange={() => flagChangeHandler(flag)}
										title={flags[flag].name}
										style={{background: `url(${flags[flag].url.small}) center / cover no-repeat` }}
									></input>
								</label>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className={classes['profile__user--namecontainer']}>
				<div className={classes['profile__user--name']}>
					<input
                  type='text'
                  name='username'
                  value={username}
                  readOnly={edit ? false : true}
                  onChange={e => inputChangeHandler(e.target)}
                  onBlur={e => validation(e.target)}
               />
				</div>
				<div className={classes['profile__user--email']}>
					<input
                  type='text'
                  name='email'
                  value={email}
                  readOnly={edit ? false : true}
                  onChange={e => inputChangeHandler(e.target)}
                  onBlur={e => validation(e.target)}
               />
				</div>
			</div>
			<div className={classes['profile__user--iconcontainer']}>
				<FaEdit className={classes['profile__user--icon']} style = {{color: edit ? 'green' : 'red'}} onClick={() => setEdit(!edit)}/>
			</div>
		</section>
	);
}

export default CardUserProfileUser;
