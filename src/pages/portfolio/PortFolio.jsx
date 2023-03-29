// import React, { useState } from 'react';
// import Layout from '../../layout/Layout'
// function PortFolio() {
//   const [items, setItems] = useState([
//     { id: 1, name: 'Item 1', checked: false },
//     { id: 2, name: 'Item 2', checked: false },
//     { id: 3, name: 'Item 3', checked: false },
//     { id: 4, name: 'Item 4', checked: false },
//   ]);
//   const [selectAll, setSelectAll] = useState(false);

//   const handleSelectAll = () => {
//     const updatedItems = items.map(item => ({ ...item, checked: !selectAll }));
//     setItems(updatedItems);
//     setSelectAll(!selectAll);
//   };

//   const handleSelectItem = itemId => {
//     const updatedItems = items.map(item =>
//       item.id === itemId ? { ...item, checked: !item.checked } : item
//     );
//     setItems(updatedItems);
//     setSelectAll(updatedItems.every(item => item.checked));
//   };

//   return (
//    <Layout>
//     <section>
//     <div>
//       <label>
//         <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
//         Select All
//       </label>
//       {items.map(item => (
//         <div key={item.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={item.checked}
//               onChange={() => handleSelectItem(item.id)}
//             />
//             {item.name}
//           </label>
//         </div>
//       ))}
//     </div>
//     </section>
//    </Layout>
//   );
// }

// export default PortFolio;
import React from 'react'

const PortFolio = () => {
  return (
   <section>
    PortFolio
   </section>
  )
}

export default PortFolio