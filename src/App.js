import logo from './logo.svg';
import agenda from './agenda';
import './App.css';

function App() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    obtener();
  }, []);

  function obtener() {
    fetch("http://www.raydelto.org/agenda.php")
      .then(function (datos) {
        return datos.json();
      })
      .then(function (datos) {
        setContactos(datos);
      });
  }

  return (
    <div className="listado">
      {contactos.map((contacto) => (
        <div key={contacto.id}>
          {contacto.nombre} {contacto.apellido} {contacto.telefono}
        </div>
      ))}
    </div>
  );
}

function AgregarContacto() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  function agregar() {
    const contacto = { nombre, apellido, telefono };
    fetch("http://www.raydelto.org/agenda.php", {
      method: "POST",
      body: JSON.stringify(contacto),
    });

    setNombre("");
    setApellido("");
    setTelefono("");
  }

  return (
    <div className="agregar">  
    <agenda/>
      <div className="info">
        <div className="columna">Nombre</div>
        <div className="columna1">
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
      </div>
      <div className="info">
        <div className="columna">Apellido</div>
        <div className="columna1">
          <input
            type="text"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
          />
        </div>
      </div>
      <div className="info">
        <div className="columna">Telefono</div>
        <div className="columna1">
          <input
            type="text"
            value={telefono}
            onChange={(event) => setTelefono(event.target.value)}
          />
        </div>
      </div>


      <div className="info">
        <button className="boton" onClick={agregar}>
          Agregar nuevo contacto
        </button>
      </div>
    </div>
  );
}



export default App;
