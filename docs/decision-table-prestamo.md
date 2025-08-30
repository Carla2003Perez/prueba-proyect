# Tabla de Decisión - puedeAprobarPrestamo
Condiciones
1. Si la persona es estudiante → NO se aprueba, aunque no tenga deudas.						
2. Si la persona es empleado/trabajador → SÍ se aprueba, aunque tenga deudas.						
3. Si la persona es retirado → SÍ se aprueba si no presenta deudas.						
4. Si la persona es retirado → NO se aprueba si presenta deudas						
                        

![alt text](image.png)

----Lo que entendi en mi logica-----
Condicion 1: Persona es estudiante y no tiene deudas, entonces el préstamo es Falso porque no aprueba
Condicion 2: Persona es estudiante y sí tiene deudas, entonces el préstamo es  Falso.
condicion 3: Persona es retirado y no tiene deudas, entonces el préstamo es Verdadero, si se aprueba
condicion 4: Persona es retirado y sí tiene deudas, entonces el préstamo es Falso.
condicion 5: Persona es trabajador y no tiene deudas,entonces el préstamo es Verdadero.
condicion 6: Persona es trabajador y sí tiene deudas, entonces el préstamo es Verdadero.