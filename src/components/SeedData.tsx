import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Tu conexión a Firebase
import productsData from '../data/products.json'; // Importamos el JSON

export default function SeedData() {
  
  const handleUpload = async () => {
    console.log("Iniciando subida de productos...");
    
    try {
      // Recorremos cada producto del JSON
      for (const product of productsData) {
        // Creamos una referencia al documento, usando el "id" del JSON como nombre del documento
        const productRef = doc(db, 'products', product.id);
        
        // Subimos la información (le quitamos el id al cuerpo para no tener datos duplicados)
        const { id, ...productDataWithoutId } = product;
        await setDoc(productRef, productDataWithoutId);
        
        console.log(`✅ Subido: ${product.name}`);
      }
      
      alert("¡Todos los productos se subieron a Firebase exitosamente!");
    } catch (error) {
      console.error("Error subiendo los datos: ", error);
      alert("Hubo un error, revisa la consola.");
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#222', margin: '20px', borderRadius: '8px', border: '1px solid #0ff' }}>
      <h3 style={{ color: '#fff' }}>Zona de Administrador (Temporal)</h3>
      <p style={{ color: '#aaa' }}>Haz clic aquí una sola vez para poblar tu base de datos de Firestore.</p>
      <button 
        onClick={handleUpload}
        style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#0ff', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '5px' }}
      >
        Subir JSON a Firestore 🚀
      </button>
    </div>
  );
}