import React, { useContext, useEffect } from 'react';
import { DispatchContext } from '../../dispatch';

import Card from '../../components/Card';

const News = (props) => {
  const [ state, dispatch ] = useContext(DispatchContext);
  const { news } = state; 

  useEffect(() => {
    dispatch({
      type: 'FETCH_NEWS',
      group: 'react',
    })
  }, []);

  const onChangeNew = ({ type }) => dispatch({
    type: 'SHOW_GROUP_BY_ID',
    group: type,
  })  

  const mapperNewsRender = (news) => {
    return (
      news.map((newTo, i) => (
        <Card
          key={i}
          width={500}
          heigth={500}
          title={newTo.title}
          description={newTo.description}
          imgSrc={newTo.image}
          link={newTo.link}
          alt="" 
        />
      ))
    )
  }

  return (
    <section className="thumbnails">
      <div>
        <h2 onClick={() => onChangeNew({ type: 'react' })}>React</h2>
        <hr />
        { mapperNewsRender(news) }
      </div>      
    </section>
  )
}

export default News;