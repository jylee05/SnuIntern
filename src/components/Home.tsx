// import React from "react";
import { useAuth } from "../contexts/AuthContext"
import { useState } from 'react';
import styles from "../Home.module.css"

const Home = () => {
  const [panelExpanded, setPanelExpanded] = useState(false);

  const expandToggle = () => {
    setPanelExpanded(p => !p)
  }


  return (
    <main className="col">
      <button className={panelExpanded ? `${styles.accordion} ${styles.active}` : `${styles.accordion}`} onClick={expandToggle}>직군 필터</button>
      {panelExpanded && (
      <div className={styles.panel}>
        <section className="col">
          <h3>개발</h3>

          <div className="row">
          <input type="checkbox" id="check-dev-total" name="total" value="total"></input>
          <label htmlFor="check-dev-total">전체</label>
          </div>
          <div className="row">
          <input type="checkbox" id="" name="check-dev-front" value="FRONT"></input>
          <label htmlFor="check-dev-front">프론트엔드 개발</label>
          </div>
          <div className="row">
          <input type="checkbox" id="check-dev-backend" name="backend" value="BACKEND"></input>
          <label htmlFor="check-dev-backend">서버⋅백엔드 개발</label> 
          </div>
          <div className="row">
          <input type="checkbox" id="check-dev-app" name="app" value="APP"></input>
          <label htmlFor="check-dev-app">앱 개발</label>                 
          </div>
          <div className="row">
          <input type="checkbox" id="check-dev-others" name="others" value="OTHERS"></input>
          <label htmlFor="check-dev-others">기타 분야</label>             
          </div>
                   
                 
                  
        </section>
        <section>
          <h3>기획</h3>
          <input type="checkbox" id="project-total" name="PLANNING" value="PLANNING"></input>
          <label htmlFor="project-total">전체</label>                    
        </section>
        <section>
          <h3>디자인</h3>
          <input type="checkbox" id="design-total" name="DESIGN" value="DESIGN"></input>
          <label htmlFor="desgin-total">전체</label>                
        </section>
        <section>
          <h3>마케팅</h3>
          <input type="checkbox" id="marketing-total" name="MARKETING" value="MARKETING"></input>
          <label htmlFor="marketing-total">전체</label>                
        </section>
      </div>
      )}


      <div></div>
    </main>    
  );
};

export default Home;
