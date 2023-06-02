window.addEventListener("load",inicio);

function inicio(){
    document.getElementById("idBotonLupa").addEventListener("click",buscar);
    document.getElementById("idPrincipal").addEventListener("click",principal);
    document.getElementById("idVerReclamos").addEventListener("click",reclamos);
    document.getElementById("idEstadisticas").addEventListener("click",estadisticas);
    document.getElementById("idAgregarEmpresa").addEventListener("click",agregarEmpresa);
    document.getElementById("idBotonReclamo").addEventListener("click",agregarReclamo);
    document.getElementById("idBotonAgregar").addEventListener("click",agregar);
    document.getElementById("idOrdenNombreCreciente").addEventListener("click",ordenNomCreciente);
    document.getElementById("idOrdenNombreDecreciente").addEventListener("click",ordenNomDecreciente);
    document.getElementById("idBotonAgregar2").addEventListener("click",agregarEmpresa2);
    principal()
}

function buscar(){  
    let buscando = document.getElementById("idBuscador").value;
    alert(buscando);
    document.getElementById("idBuscador").value="";
}

function principal(){
    esconderSecciones();
    document.getElementById("Seccion1").style.display = "block";
}

function reclamos(){
    esconderSecciones();
    document.getElementById("Seccion2").style.display = "block";
}

function estadisticas(){
    esconderSecciones();
    document.getElementById("Seccion3").style.display = "block";
}

function agregarEmpresa(){
    esconderSecciones();
    document.getElementById("Seccion4").style.display = "block";
}

function agregarReclamo(){
    alert("en Agregar Reclamo");
}

function esconderSecciones(){
    let secciones = document.getElementsByClassName("Seccion");
    for (let elemento of secciones){
        elemento.style.display = "none"
    }
}

function agregar(){
    let miForm = document.getElementById("idFormulario")
    let nombre = document.getElementById("idNom").value;
    let empresa = document.getElementById("idSelectDropdown").value;
    let titulo = document.getElementById("idReclamo").value;
    let reclamo = document.getElementById("idParrafoReclamo").value;
    if(miForm.reportValidity()){
        alert(nombre + " " + empresa + " " + titulo + " " + reclamo + " ");
        miForm.reset();
    }     
}

function agregarEmpresa2(){
    let miForm2 = document.getElementById("idFormulario2")
    let nomEmpresa = document.getElementById("idNom2").value;
    let direc = document.getElementById("idDirec").value;
    let rubro = document.getElementById("idRubro").value;
    if(miForm2.reportValidity()){
        alert(nomEmpresa + " " + direc + " " + rubro + " ");
        miForm2.reset();
    }     
}


function contador(){

}

function ordenNomCreciente(){
    alert("ordenNomCreciente")
}

function ordenNomDecreciente(){
    alert("ordenNomDecreciente")
}

function letra (){
    
}
