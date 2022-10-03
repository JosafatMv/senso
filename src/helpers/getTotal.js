export const getTotal = ({
	funcionalidad,
	confiabilidad,
	usabilidad,
	rendimiento,
	mantenimiento,
	portabilidad,
	seguridad,
	compatibilidad,
}) => {

    let total = 0;

    total+= funcionalidad/40 * 100;
    total+= confiabilidad/40 * 100;
    total+= usabilidad/40 * 100;
    total+= rendimiento/40 * 100;
    total+= mantenimiento/40 * 100;
    total+= portabilidad/40 * 100;
    total+= seguridad/40 * 100;
    total+= compatibilidad/40 * 100;

    return total;

};
