<?php 


class Reserva
{

    private $nombre;
    private $apellido;
    private $telefono;
    private $email;
    private $usuario;
    private $password;
    private $destino;
    private $fechaPartida;
    private $fechaRegreso;
    private $tipoSolicitud;
    private $tipoAlojamiento;
    private $numeroPasajeros;

    function __construct($nombre, $apellido, $telefono, $email, $usuario, $password, $destino, $fechaPartida, $fechaRegreso, $tipoSolicitud, $tipoAlojamiento, $numeroPasajeros)
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->telefono = $telefono;
        $this->email = $email;
        $this->usuario = $usuario;
        $this->password = $password;
        $this->destino = $destino;
        $this->fechaPartida = $fechaPartida;
        $this->fechaRegreso = $fechaRegreso;
        $this->tipoSolicitud = $tipoSolicitud;
        $this->tipoAlojamiento = $tipoAlojamiento;
        $this->numeroPasajeros = $numeroPasajeros;
    }

    function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    function getNombre()
    {
        return $this->nombre;
    }

    function setApellido($apellido)
    {
        $this->apellido = $apellido;
    }

    function getApellido()
    {
        return $this->apellido;
    }

    function setTelefono($telefono)
    {
        $this->telefono = $telefono;
    }

    function getTelefono()
    {
        return $this->telefono;
    }

    function setEmail($email)
    {
        $this->email = $email;
    }

    function getEmail()
    {
        return $this->email;
    }

    function setUsuario($usuario)
    {
        $this->usuario = $usuario;
    }

    function getUsuario()
    {
        return $this->usuario;
    }

    function setPassword($password)
    {
        $this->password = $password;
    }

    function getPassword()
    {
        return $this->password;
    }

    function setDestino($destino)
    {
        $this->destino = $destino;
    }

    function getDestino()
    {
        return $this->destino;
    }

    function setFechaPartida($fechaPartida)
    {
        $this->fechaPartida = $fechaPartida;
    }

    function getFechaPartida()
    {
        return $this->fechaPartida;
    }

    function setFechaRegreso($fechaRegreso)
    {
        $this->fechaRegreso = $fechaRegreso;
    }

    function getFechaRegreso()
    {
        return $this->fechaRegreso;
    }

    function setTipoSolicitud($tipoSolicitud)
    {
        $this->tipoSolicitud = $tipoSolicitud;
    }

    function getTipoSolicitud()
    {
        return $this->tipoSolicitud;
    }

    function setTipoAlojamiento($tipoAlojamiento)
    {
        $this->tipoAlojamiento = $tipoAlojamiento;
    }

    function getTipoAlojamiento()
    {
        return $this->tipoAlojamiento;
    }

    function setNumeroPasajeros($numeroPasajeros)
    {
        $this->numeroPasajeros = $numeroPasajeros;
    }

    function getNumeroPasajeros()
    {
        return $this->numeroPasajeros;
    }
}

function cargarDatos()
{

    if ($destino = $_REQUEST['ciudades'] == "1") {
        $destino = "Brazo Oriental";
    } else if ($destino = $_REQUEST['ciudades'] == "2") {
        $destino = "Union";
    } else if ($destino = $_REQUEST['ciudades'] == "3") {
        $destino = "Prado";
    }
   
    if (isset($_REQUEST['tipo'])) {
        if ($_REQUEST['tipo'] == "soloPasaje") {
            $tipoSolicitud = "Solo pasaje";
        } else if ($_REQUEST['tipo'] == "soloAlojamiento") {
            $tipoSolicitud = "Solo alojamiento";
        } else if ($_REQUEST['tipo'] == "viajeAlojamiento") {
            $tipoSolicitud = "Viaje y alojamiento";
        } else {
            $tipoSolicitud = "Valor no válido";
        }
    } else {
        $tipoSolicitud = "Valor no definido";
    }

    if (isset($_REQUEST['tipoAlojamiento1'])) {
        $tipoAlojamiento = "Hotel";
    } else if (isset($_REQUEST['tipoAlojamiento2'])) {
        $tipoAlojamiento = "Hostel";
    } else if (isset($_REQUEST['tipoAlojamiento3'])) {
        $tipoAlojamiento = "Estancia";
    } else if (isset($_REQUEST['tipoAlojamiento4'])) {
        $tipoAlojamiento = "Habitacion";
    }

    $menores = $_REQUEST['menores'];
    $mayores = $_REQUEST['mayores'];
    $numeroPasajeros = $menores + $mayores;

    $reserva = new Reserva(
        $_REQUEST['nombre'],
        $_REQUEST['apellido'],
        $_REQUEST['telefono'],
        $_REQUEST['mail'],
        $_REQUEST['usuario'],
        $_REQUEST['password'],
        $destino,
        $_REQUEST['fechaPartida'],
        $_REQUEST['fechaRegreso'],
        $tipoSolicitud,
        $tipoAlojamiento,
        $numeroPasajeros
    );

    $datos = array(
        "Nombre" => $reserva->getNombre(),
        "Apellido" => $reserva->getApellido(),
        "Telefono" => $reserva->getTelefono(),
        "Email" => $reserva->getEmail(),
        "Usuario" => $reserva->getUsuario(),
        "Password" => $reserva->getPassword(),
        "Destino" => $reserva->getDestino(),
        "Fecha partida" => $reserva->getFechaPartida(),
        "Fecha regreso" => $reserva->getFechaRegreso(),
        "Solicitud" => $reserva->getTipoSolicitud(),
        "Alojamiento" => $reserva->getTipoAlojamiento(),
        "Numero de pasajeros" => $reserva->getNumeroPasajeros()
    );

    return $datos;
}


function guardarJson($datos, $directorio)
{
    $jsonString = json_encode($datos, JSON_PRETTY_PRINT);
    if ($jsonString == false) {
        return false;
    }

    $archivo = $directorio . "/datos.json";
    $i = 1;

    while (file_exists($archivo)) {
        $archivo = $directorio . "/datos" . $i . ".json";
        $i++;
    }

    $guardado = file_put_contents($archivo, $jsonString);

    if ($guardado === false) {
        // Manejo de error si la escritura del archivo falla
        return false;
    }

    return $archivo;
}

$datos=cargarDatos();

guardarJson($datos,"/xampp/htdocs/practicos/apis/formularios/json");


?>