import { useState } from 'react';
import styles from '../MyPage.module.css';
import Bookmark from './Bookmark';

const MyPage = () => {
  const [activeTab, setActiveTab] = useState('bookmarks');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>마이페이지</h1>
      <div className={styles.menu}>
        <button
          type="button"
          className={activeTab === 'bookmarks' ? styles.active : ''}
          onClick={() => setActiveTab('bookmarks')}
        >
          관심공고
        </button>
        <button
          type="button"
          className={activeTab === 'myinfo' ? styles.active : ''}
          onClick={() => setActiveTab('myinfo')}
        >
          내 정보
        </button>
      </div>
      <div className={styles.content}>
        {activeTab === 'bookmarks' ? (
          <Bookmark />
        ) : (
          <div>
            <h2>내 정보</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPage;
