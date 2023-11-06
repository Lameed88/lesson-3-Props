

import ItemList from './ItemList'



const Content = ({items, setItems, handleCheck, handleDelete}) => {





    return (
        <main>
            {items.length ? (
              <ItemList handleCheck={handleCheck} items={items} handleDelete={handleDelete}/>
            ) : (
                <p style={{ marginTop: "2rem" }}>Your List is Empty</p>
            )}
        </main>
    )
}

export default Content