import { dataCourses } from "./dataCourses.js";
import { student } from "./dataStudent.js";
import { keyStudent } from "./dataStudent.js";
// Obtener el elemento con id courses
var coursesTBody = document.getElementById('courses'); // Nodo tbody que tiene el id="courses", el ! sirve para quitar la posibilidad de resivir un null o undifined
// Obtener el elementocon id button-filterByName
var btnfilterByName = document.getElementById("button-filterByName");
// Obtner el valor que enetra en el inpu con nombre search-box
var inputSearchBox = document.getElementById("search-box");
// Obtener elemento con el id total-credits
var totalCreditElm = document.getElementById("total-credits");
// Obtener el elemento con id student
var studenTBody = document.getElementById('student');
// Obtener el elemento con id nombre
var nombreTBody = document.getElementById('nombre');
// Obtener el elementocon id button-filterByCredit-minmax
var btnfilterByCredit = document.getElementById("button-filterByCredit-minmax");
// Obtner el valor que enetra en el inpu con nombre search-box
var inputSearchBoxMin = document.getElementById("search-box-min");
// Obtner el valor que enetra en el inpu con nombre search-box
var inputSearchBoxMax = document.getElementById("search-box-max");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCredit.onclick = function () { return applyFilterByCredits(); };
renderCoursesInTable(dataCourses);
renderStudentInTable(student);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
// La función renderCoursesInTable lee los datos de un arreglo de objetos curso y finalmente lo despliega en la tabla de cursos actuales (DOM).
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + c.name + "</td>\n                            <td>" + c.professor + "</td>\n                            <td class=\"text-center\">" + c.credits + "</td>";
        coursesTBody.appendChild(trElement);
    });
}
// La función renderStudentInTable lee los datos de un objeto student y finalmente lo despliega en la tabla de cursos actuales (DOM).
function renderStudentInTable(student) {
    console.log('Desplegando usuario');
    var studentA = [student];
    keyStudent.forEach(function (val, i) {
        var trElement = document.createElement("tr");
        var actStudent = [student.name, student.code, student.identification, student.age.toString(), student.direction, student.phone];
        trElement.innerHTML = "<td>" + val + "</td>\n                            <td>" + actStudent[i + 1] + "</td>";
        nombreTBody.innerText = actStudent[0];
        studenTBody.appendChild(trElement);
    });
}
// La función getTotalCredits recorre todos los cursos actuales para obtener el total de créditos del estudiante.
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (c) {
        totalCredits += c.credits;
    });
    return totalCredits;
}
// La funcion applyFilterByName para obtener el texto de búsqueda, limpiar la tabla y llamar a la búsqueda
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFilteres = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFilteres);
}
// La funcion searchCourseByName que se encarga de ejecutar la búsqueda mediante el uso de filter.
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
// La funcion clearCoursesInTable se encarga de limpiar las celdas de la tablas cuando se hace un filtro
function clearCoursesInTable() {
    while (coursesTBody.hasChildNodes()) {
        if (coursesTBody.firstChild != null) {
            coursesTBody.removeChild(coursesTBody.firstChild);
        }
    }
}
// La funcion applyFilterByCredits para obtener las materias dentro del intervalo insertado
function applyFilterByCredits() {
    var text1 = inputSearchBoxMin.value;
    var text2 = inputSearchBoxMax.value;
    if (text1 == null && text2 == null) {
        text1 = '';
        text2 = '';
    }
    clearCoursesInTable();
    var coursesFilteres = searchCourseByCredits(text1, text2, dataCourses);
    renderCoursesInTable(coursesFilteres);
}
// La funcion searchCourseByCredits que se encarga de ejecutar la búsqueda mediante el uso de filter.
function searchCourseByCredits(nameKey1, nameKey2, courses) {
    return nameKey1 === '' && nameKey2 === '' ? dataCourses : courses.filter(function (c) {
        return c.credits >= parseInt(nameKey1) &&
            c.credits <= parseInt(nameKey2);
    });
}
