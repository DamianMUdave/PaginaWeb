# Paso 1. Importamos la librería. 
import jwt
# Paso 2. Construimos el cuerpo de nuestro token
encoded_jwt = jwt.encode({"some": "payload"}, "mysupersecret", algorithm="HS256")
# Paso 3. Imprimimos el ejemplo codificado.
print(encoded_jwt)
#eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb21lIjoicGF5bG9hZCJ9.Joh1R2dYzkRvDkqv3sygm5YyK8Gi4ShZqbhK2gxcs2U
# Paso 4. Así tambien podemos probar decodificando
jwt.decode(encoded_jwt, "mysupersecret", algorithms=["HS256"])
{'some': 'payload'}