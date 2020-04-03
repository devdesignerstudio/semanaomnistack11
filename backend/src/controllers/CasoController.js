const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = { 
    async index (request, response) {

        const { page = 1 } = request.query;

        const [contador] = await connection('casos').count();

        console.log(contador);

        const casos = await connection('casos')
        .join('ongs','ongs.id','=','casos.ong_id')
        .limit(5)
        .offset((page -1)*5)
        .select([
            'casos.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);
        //.select('*');

        response.header('X-Total-Count', contador['count(*)']);
    
        return response.json(casos);
    },
    async create (request, response){
        //const data = request.body ;
    const { title, description, value} = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('casos').insert({
        title,
        description,
        value,
        ong_id
    });
    //return response.send('Olá Célio!');
    return response.json({ id})
        //evento: 'Semana OmniStack 11.0 - 2020',
        //aluno: 'Aluno : Alesia Pontes'
    //})
    },
    async delete(request,response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const caso = await connection('casos')
        .where('id',id)
        .select('ong_id')
        .first();

        if (caso.ong_id != ong_id) {
            return response.status(401).json({Error: 'Operação não permitida!' });
        }

        await connection('casos').where('id',id).delete();

        return response.status(204).send();

    }
};