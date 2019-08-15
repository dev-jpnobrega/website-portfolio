import React, { useContext, useEffect } from 'react';
import { Context } from '../../context';
import { fetchNews } from '../../service/news-service';

import Card from '../../components/Card';

function News(props) {
  const [ state, dispatch ] = useContext(Context);
  const { news: { news } } = state;

  useEffect(() => {
    fetchNews().then(news => 
      dispatch({
        type: 'FETCHED_NEWS',
        news,
      })
    );    
  }, []);

  const onChangeNew = ({ type }) => dispatch({
    type: 'SHOW_GROUP_BY_ID',
    group: type,
  })  

  function mapperNewsRender(news) {
    return news.map((newTo, i) => {
      return (
        <div key={i}>
          <h2 onClick={() => onChangeNew({ type: newTo.group })}>{ newTo.group }</h2>
          <hr />
          {
            newTo.list.map((ned, ined) => (
              <Card
                key={ined}
                width={500}
                heigth={500}
                title={ned.title}
                description={ned.description}
                imgSrc={ned.image}
                link={ned.link}
                alt=""
              />
            ))
          }
        </div>
      )
    });
  }

  console.warn('news', news);

  return (
    <section className="thumbnails">
      { mapperNewsRender(news) }  
    </section>
  )
}

export default News;