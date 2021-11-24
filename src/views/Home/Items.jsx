import Card from '../../components/Card';

function Items({ currentItems }) {
  return (
    <>
      {!!currentItems?.length ? (
        currentItems.map((item) => (
          <Card item={item} key={item.id} className='card' />
        ))
      ) : (
        <div>No matches</div>
      )}
    </>
  );
}

export default Items;
