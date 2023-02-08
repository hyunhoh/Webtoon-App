import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./myPage.module.css";

function MyPage() {
  const { userId, img, info } = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/webtoon/");
  };

  return (
    <div className={styles.mypage_wrap}>
      <h1 className={styles.home}>
        <Link to="/webtoon/">
          <AiFillHome />
        </Link>
      </h1>
      <div className={styles.user_wrap}>
        <div className={styles.userId}>
          반가워요! <span>{userId}</span> 님,
        </div>
        <img src={img} alt={userId} className={styles.avatar} />
        <div className={styles.info}>{info}</div>
        <button className={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default MyPage;
