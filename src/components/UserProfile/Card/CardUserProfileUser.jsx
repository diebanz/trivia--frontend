import { useState, useEffect, useRef } from "react";
import axios from "axios";

import { FaEdit } from "react-icons/fa";

import { flags } from "../../../common/flags.js";
import classes from "./../../../sass/components/UserProfile/Card/CardUser.module.scss";

function CardUserProfileUser() {
   const [data, setData] = useState();
   const [nat, setNat] = useState();
   const selectRef = useRef();

   useEffect(() => {
      (async () => {
         const response = await axios.get(
            `${process.env.REACT_APP_BACKEND}/user/tobi`
         );
         if (response.data.message === "success")
            setData(response.data.payload);
      })();
   }, [nat]);

   async function flagChangeHandler(key) {
      try {
         setNat(data.nat);
         selectRef.current.style.visibility = "collapse";
         const update = await axios.patch(
            `${process.env.REACT_APP_BACKEND}/user/tobi`,
            { updates: { nat: key } }
         );
      } catch (err) {}
   }

   const openFlagsHandler = () => {
      console.log(data.img);
      if (selectRef.current.style.visibility === "visible")
         return (selectRef.current.style.visibility = "collapse");
      selectRef.current.style.visibility = "visible";
   };

   return (
      <section className={classes.profile__user}>
         <div className={classes["profile__user--piccontainer"]}>
            <div
               className={classes["profile__user--pic"]}
               style={{
                  background: `url(${
                     data && data.img
                  }) center / cover no-repeat`,
               }}
            >
               <div
                  className={classes["profile__user--pic__flag"]}
                  style={{
                     background: `url('https://flagcdn.com/64x48/${
                        data && data.nat
                     }.png') no-repeat`,
                  }}
                  onClick={openFlagsHandler}
               >
                  <div className={classes.selectFlag} ref={selectRef}>
                     {Object.keys(flags).map((flag, i) => (
                        <label key={flag}>
                           <input
                              type="radio"
                              name="nat"
                              value={flag}
                              onChange={() => flagChangeHandler(flag)}
                              title="test"
                              style={{
                                 background: `url(${flags[flag]}) center / cover no-repeat`,
                              }}
                           ></input>
                        </label>
                     ))}
                  </div>
               </div>
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
      </section>
   );
}

export default CardUserProfileUser;
