import React, { useContext, useEffect } from 'react';
import { Context } from '../../context';

import Card from '../../components/Card';

const News = (props) => {
  const [ state, dispatch ] = useContext(Context);
  const { news: { news } } = state;

  useEffect(() => {
    dispatch({
      type: 'FETCH_NEWS',
      group: 'react',
    })
  }, [ ]);

  const onChangeNew = ({ type }) => dispatch({
    type: 'SHOW_GROUP_BY_ID',
    group: type,
  })  

  const mapperNewsRender = (news) => {
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

  return (
    <section className="thumbnails">
      { mapperNewsRender(news) }  
    </section>
  )
}

export default News;