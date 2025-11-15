import { useState } from 'react';
import styles from '../MyPage.module.css';
import Bookmark from './Bookmark';

const MyPage = () => {
  const [activeTab, setActiveTab] = useState('bookmarks');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>마이페이지</h1>
      <div className={styles.menuHeader}>
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
        {activeTab === 'myinfo' && (
          <button type="button" className={styles.createProfileButton}>
            내 프로필 생성
          </button>
        )}
      </div>
      <div className={styles.content}>
        {activeTab === 'bookmarks' ? (
          // 북마크 랜더링
          <Bookmark />
        ) : (
          // 'myinfo' 페이지
          // api로 프로필이 있는지 확인해야 함
          <div className={styles.profilePromptContainer}>
            <h2 className={styles.promptTitle}>
              아직 프로필이 등록되지 않았어요!
            </h2>
            <p className={styles.promptSubtitle}>
              기업에 소개할 나의 정보를 작성해서 나를 소개해보세요.
            </p>
            <button type="button" className={styles.promptButton}>
              지금 바로 프로필 작성하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPage;
