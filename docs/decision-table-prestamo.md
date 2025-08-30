# Tabla de Decisión - puedeAprobarPrestamo
Condiciones
1. Si la persona es estudiante → NO se aprueba, aunque no tenga deudas.						
2. Si la persona es empleado/trabajador → SÍ se aprueba, aunque tenga deudas.						
3. Si la persona es retirado → SÍ se aprueba si no presenta deudas.						
4. Si la persona es retirado → NO se aprueba si presenta deudas						
                        

![alt text](image.png)

----Lo que entendi en mi logica-----
Condicion 1: l estudiante no tiene deudas, entonces el préstamo es Falso porque no aprueba
Condicion 2: Estudiante sí tiene deudas, entonces el préstamo es Falso.
condicion 3: El retirado no tiene deudas, entonces el préstamo es Verdadero, si se aprueba
condicion 4: El retirado sí tiene deudas, entonces el préstamo es Falso.
condicion 5: El trabajador no tiene deudas,entonces el préstamo es Verdadero.
condicion 6: El trabajador sí tiene deudas, entonces el préstamo es Verdadero.