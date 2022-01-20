import {useState, useEffect} from "react";
import axios from "axios";

import { FaEdit } from "react-icons/fa";

import {flags} from "../../../common/flags.js"
import classes from "./../../../sass/components/UserProfile/Card/CardUser.module.scss";
import { url } from "inspector";


function CardUserProfileUser() {
    const [data, setData] = useState();
    useEffect(() => {
        (async () => {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND}/user/tobi`
            );
            console.log(response.data);
            if (response.data.message === "success")
                setData(response.data.payload);
            
        })();
    }, []);



    function flagChangeHandler () {

    }


    return (
       <section className={classes.profile__user}>
          <div className={classes["profile__user--piccontainer"]}>
             <div className={classes["profile__user--pic"]}>
                <div
                   className={classes["profile__user--flag"]}
                   style={{
                      backgroundImage: `${
                         data && data.nat ? data.nat : "https://flagcdn/64x48/un.png"
                      }`,
                   }}
                   onClick={flagChangeHandler}
                ></div>
             </div>
             <div className={classes["profile__user--year"]}>
                <p>{(data && data.dob) || "set DoB"}</p>
             </div>
          </div>
          <div className={classes["profile__user--namecontainer"]}>
             <div className={classes["profile__user--name"]}>
                <p>{data && data.username}</p>
             </div>
             <div className={classes["profile__user--email"]}>
                <p>{(data && data.email) || "enter your email here"}</p>
             </div>
             <div className={classes["profile__user--statcontainer"]}>
                <div className={classes["profile__user--recentachiev"]}>
                   Warmed up!
                </div>
                <div className={classes["profile__user--currentrank"]}>
                   {/* {data && data.} */}
                </div>
             </div>
          </div>
          <div className={classes["profile__user--iconcontainer"]}>
             <FaEdit className={classes["profile__user--icon"]} />
          </div>

          <select ref={selectRef}>
              {flags.map((flag, i)=> {
                  return <option value={flag.keys[i]} style={{backgroundImage: url(flag[i])}}></option>
              })}
          </select>
       </section>
    );
}

export default CardUserProfileUser;
