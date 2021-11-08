import db from "../db.js";

import Sequelize from 'sequelize';
const { Op, col, fn } = Sequelize;

import express from "express";
const app = express.Router();

app.get('/confirmTicket', async (req,resp) => { 
    const vendas = await db.infoc_nws_tb_venda.findAll({
        where: {
            'ds_situacao': 'Aguardando'
        },
        include: [
            {
                model: db.infoc_nws_tb_usuario,
                as: 'id_usuario_infoc_nws_tb_usuario',
                attributes: [],
                required: true
            }
            // {
            //     model: db.infoc_nws_tb_venda_item,
            //     as: 'infoc_nws_tb_venda_items',
            //     attributes: [],
            //     required: true,
            //     include: [
            //         {
            //             model: db.infoc_nws_tb_evento,
            //             as: 'id_evento_infoc_nws_tb_evento',
            //             attributes: [],
            //             required: true
            //         }
            //     ]
            // }
        ],
        attributes: [
            [col('infoc_nws_tb_venda.id_venda'), 'id'],
            [col('infoc_nws_tb_venda.ds_situacao'), 'situacao'],
            [col('tp_pagamento'), 'tipoPagamento'],
            [col('id_usuario_infoc_nws_tb_usuario.nm_usuario'), 'usuario'],
            // [col('infoc_nws_tb_venda_items.id_evento_infoc_nws_tb_evento.nm_evento'), 'evento']
        ],
        group: [
            col('infoc_nws_tb_venda.id_venda'),
            col('infoc_nws_tb_venda.ds_situacao'),
            col('tp_pagamento'),
            col('id_usuario_infoc_nws_tb_usuario.nm_usuario'),
            // col('infoc_nws_tb_venda_items.id_evento_infoc_nws_tb_evento.nm_evento')
        ]
    })

    resp.send(vendas);
});


app.put('/confirmTicket', async (req,resp) => { 
    const aprovado = Number(req.query.number);
    const idVenda = Number(req.query.id);

    console.log(aprovado)
    console.log(idVenda)
     
    try { 

        if( aprovado === 1) {
            const r = await db.infoc_nws_tb_venda.update({
                'ds_situacao':  'Aprovado'
    
            }, {
                where: { id_venda: idVenda }
            })

            console.log(r);
            
        } else if ( aprovado === 0){
            const f = await db.infoc_nws_tb_venda.update({
                'ds_situacao': 'Reprovado'
    
            }, {
                where: { id_venda: idVenda }
            })
        }

        resp.sendStatus(200);

    } catch (e) { 
        resp.send({ erro: e.toString() })
    }

})


app.get('/relatorios', async (req,resp) => {
    try {
        let r = await db.infoc_nws_tb_categoria.findAll({
            include: [{
                model:  db.infoc_nws_tb_evento,
                as: 'infoc_nws_tb_eventos',
                required: true,
                attributes: [],
                include: [{
                    model:  db.infoc_nws_tb_venda_item,
                    as: 'infoc_nws_tb_venda_items',
                    required: true,
                    attributes: [],
                    include: [{
                        model: db.infoc_nws_tb_venda,
                        as: 'id_venda_infoc_nws_tb_venda',
                        required: true,
                        attributes:[]
                    }]
                }]
            }],
            group: [
                col('infoc_nws_tb_eventos.id_categoria'),
            ],
            attributes: [
                [fn('count', 1), 'qtdEventos'],
                [col('infoc_nws_tb_eventos.id_categoria'), 'categoria']
            ]

        })
        
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


app.get('/relatorios', async (req,resp) => {
    try {
        let r = await db.infoc_nws_tb_venda.findAll({
            include: [{
                model: db.infoc_nws_tb_venda_item,
                as: 'infoc_nws_tb_venda_items',
                required: true,
                attributes: [],
                include: [{
                    model:  db.infoc_nws_tb_evento,
                    as: 'infoc_nws_tb_eventos',
                    required: true,
                    attributes: [],
                    include: [{
                        model: db.infoc_nws_tb_categoria,
                        as: 'id_categoria_infoc_nws_tb_categorium',
                        required: true,
                        attributes: []
                    }]
                }]
            }],
            group: [
                col('infoc_nws_tb_venda_items.id_categoria')
            ],
            attributes: [
                [fn('count', 1), 'qtdEventos'],
                [col('infoc_nws_tb_venda_items.id_categoria'), 'categoria']
            ]
        })


    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.get('/adm', async (req, resp) => {
    try {
        let confirm = await db.infoc_nws_tb_usuario.findOne({where: {ds_username: req.query.username}});
        if (confirm == null) 
            return resp.send( {erro: "Usuário não cadastrado"})
    
        if (confirm.ds_senha != req.query.password)
            return resp.send( {erro: "Senha incorreta"})

        if (confirm.bt_admin == false) 
            return resp.send( {erro: "Usuário não é um administrador"})
        
        let r = await db.infoc_nws_tb_usuario.findOne( {where: { id_usuario: confirm.id_usuario }} );
        resp.send(r);

    } catch (e) {resp.send( { erro: e.toString()})}
})

app.post('/adm', async (req, resp) => {
    try {
        let json = req.body;
        let r = await db.infoc_nws_tb_usuario.create({
            nm_usuario: json.nmUsu,
            ds_cpf: json.cpf,
            ds_email: json.email,
            ds_username: json.username,
            ds_senha: json.senha,
            dt_nascimento: json.nascimento,
            bt_adm: true
        })
    } catch (e) {resp.send( {erro: e.toString()})}
})


export default app;