import React from 'react';
import updateStyle from './Update.module.css';

function Update() {
  return (
    <div className={updateStyle.container2}>
    <div className={updateStyle.container1}>
      <div className={updateStyle.text}>BLOG</div>
      <form method="post">
        <div className={updateStyle['form-row']}>
          <div className={updateStyle['input-data']}>
            <input
              type="text"
              name="title"
              id="title"
              value="{{message['title']}}"
              required
            />
            <div className={updateStyle.underline}></div>
            <label>Title</label>
          </div>
        </div>

        <div className={updateStyle['form-row']}>
          <div className={updateStyle['input-data']}>
            <input
              type="textarea"
              name="content"
              id="content"
              value="{{message['content']}}"
              required
            />
            <div className={updateStyle.underline}></div>
            <label>Post</label>
          </div>
        </div>

        <br />

        <div className={updateStyle['form-row']}>
          <div className={updateStyle['input-data']}>
            <div className={updateStyle['submit-btn']}>
              <div className={updateStyle['input-data']}>
                <div className={updateStyle.inner}></div>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Update;
