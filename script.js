/* ==========================================
   INFORMACIÓN DE LAS SITUACIONES
========================================== */

const situaciones = {

    salud: {

        icono: "🏥",

        titulo: "Me siento mal",

        texto:
        "Si no te sientes bien, busca ayuda de un adulto responsable y evita quedarte solo/a.",

        pasos: [

            "Informa a tu profesor o a un adulto responsable.",

            "Explica qué síntomas o molestias tienes.",

            "Dirígete a enfermería acompañado/a si es necesario.",

            "Sigue las indicaciones del personal encargado."

        ],

        lugar:
        "Enfermería — Bloque B"

    },


    perdido: {

        icono: "🎒",

        titulo: "Perdí algo",

        texto:
        "Si has perdido un objeto dentro del colegio, puedes seguir estos pasos para intentar recuperarlo.",

        pasos: [

            "Piensa dónde viste el objeto por última vez.",

            "Revisa el salón, patio o lugar donde estuviste.",

            "Pregunta al profesor o encargado del lugar.",

            "Si no aparece, informa en recepción u objetos perdidos."

        ],

        lugar:
        "Recepción / Objetos perdidos — Bloque A"

    },


    academico: {

        icono: "📚",

        titulo: "Tengo un problema académico",

        texto:
        "Si tienes dificultades con una materia, no tienes que resolverlo todo por tu cuenta.",

        pasos: [

            "Identifica la materia o actividad con la que tienes dificultad.",

            "Habla con el profesor de la asignatura.",

            "Pregunta qué puedes hacer para mejorar o solucionar el problema.",

            "Si necesitas más ayuda, acude a coordinación académica."

        ],

        lugar:
        "Coordinación académica — Bloque A"

    },


    orientacion: {

        icono: "🧑‍🏫",

        titulo: "Necesito orientación",

        texto:
        "Si necesitas hablar con alguien sobre una situación personal, escolar o de convivencia, busca orientación.",

        pasos: [

            "Busca un adulto de confianza dentro de la institución.",

            "Explica que necesitas orientación.",

            "Solicita apoyo del área de orientación.",

            "Habla con tranquilidad y explica lo que está sucediendo."

        ],

        lugar:
        "Orientación — Segundo piso"

    },


    /* ==========================================
       ACOSO ESCOLAR
    ========================================== */

    acoso: {

        icono: "💙",

        titulo: "Estoy viviendo acoso escolar",

        texto:
        "Si alguien te está molestando, intimidando, amenazando o haciendo sentir mal de manera repetida, no tienes que enfrentar la situación solo/a.",

        pasos: [

            "Busca un adulto de confianza y cuéntale lo que está sucediendo.",

            "Si es seguro hacerlo, aléjate de la situación y busca compañía.",

            "Informa al área de orientación o coordinación.",

            "Cuenta cuándo, dónde y qué ocurrió para que puedan ayudarte.",

            "Si presencias una situación de acoso, también puedes pedir ayuda por la persona afectada."

        ],

        lugar:
        "Orientación y Coordinación — Bloque A"

    },


    /* ==========================================
       EMERGENCIA
    ========================================== */

    emergencia: {

        icono: "🚨",

        titulo: "Es una emergencia",

        texto:
        "Si existe un peligro inmediato, busca ayuda de un adulto responsable o del personal de la institución inmediatamente.",

        pasos: [

            "Mantén la calma y aléjate del peligro si puedes hacerlo de forma segura.",

            "Avisa inmediatamente a un profesor, coordinador o adulto responsable.",

            "Sigue las instrucciones del personal de la institución.",

            "Utiliza los protocolos de emergencia establecidos por la institución."

        ],

        lugar:
        "Seguridad / Personal responsable — Entrada principal"

    },


    /* ==========================================
       OTRA SITUACIÓN
    ========================================== */

    otra: {

        icono: "💬",

        titulo: "Es otra situación",

        texto:
        "Si tu situación no aparece en las opciones, puedes acudir a una persona responsable para recibir orientación.",

        pasos: [

            "Explica brevemente qué está sucediendo.",

            "Busca a un profesor o adulto responsable.",

            "Si es necesario, solicita orientación o coordinación.",

            "Sigue las indicaciones que te proporcionen."

        ],

        lugar:
        "Coordinación — Bloque A"

    }

};



/* ==========================================
   MOSTRAR SITUACIÓN
========================================== */

function mostrarSituacion(tipo) {

    const situacion = situaciones[tipo];

    if (!situacion) {
        return;
    }


    document.getElementById("iconoResultado")
    .textContent = situacion.icono;


    document.getElementById("tituloResultado")
    .textContent = situacion.titulo;


    document.getElementById("textoResultado")
    .textContent = situacion.texto;


    document.getElementById("lugarResultado")
    .textContent = situacion.lugar;



    /* CREAR LISTA DE PASOS */

    const lista =
        document.getElementById("pasosResultado");


    lista.innerHTML = "";


    situacion.pasos.forEach(function(paso) {

        const li =
            document.createElement("li");

        li.textContent = paso;

        lista.appendChild(li);

    });



    /* MOSTRAR RESULTADO */

    const resultado =
        document.getElementById("resultado");


    resultado.classList.add("mostrar");


    /* DESPLAZARSE AL RESULTADO */

    setTimeout(function() {

        resultado.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }, 100);

}



/* ==========================================
   VOLVER
========================================== */

function volverInicio() {

    const resultado =
        document.getElementById("resultado");


    resultado.classList.remove("mostrar");


    setTimeout(function() {

        document.getElementById("situaciones")
        .scrollIntoView({

            behavior: "smooth"

        });

    }, 100);

}



/* ==========================================
   MENÚ PARA CELULAR
========================================== */

function toggleMenu() {

    const menu =
        document.getElementById("menu");

    menu.classList.toggle("abierto");

}



/* CERRAR MENÚ */

function cerrarMenu() {

    const menu =
        document.getElementById("menu");

    menu.classList.remove("abierto");

}