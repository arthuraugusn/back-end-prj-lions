const { get, sendFile } = require("express/lib/response")
var alunos = [
     
    {       "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Aline de Almeida Campos",
            "matricula" : "20151001001",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2024",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "sigla" :   "IAR",
                            "carga" :   "75",
                            "media" :   "93",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "sigla" :   "IAN",
                            "carga" :   "120",
                            "media" :   "68",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Hardware",
                            "sigla" :   "HRW",
                            "carga" :   "75",
                            "media" :   "74",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "sigla" :   "SR",
                            "carga" :   "240",
                            "media" :   "85",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "sigla" :   "CE",
                            "carga" :   "150",
                            "media" :   "59",
                            "status":   "Exame"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Ana Carolina Vasconcelos Barreto",
            "matricula" : "20151001002",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2023",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "52",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "sigla" :   "IAR",
                            "carga" :   "75",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "sigla" :   "IAN",
                            "carga" :   "120",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "sigla" :   "HRW",
                            "carga" :   "75",
                            "media" :   "54",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "sigla" :   "SR",
                            "carga" :   "240",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "sigla" :   "CE",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "ANDERSON GERÔNCIO SOUZA SILVA",
            "matricula" : "20151001004",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2023",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "30",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "sigla" :   "IAR",
                            "carga" :   "75",
                            "media" :   "77",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "sigla" :   "IAN",
                            "carga" :   "120",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Hardware",
                            "sigla" :   "HRW",
                            "carga" :   "75",
                            "media" :   "84",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "sigla" :   "SR",
                            "carga" :   "240",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "sigla" :   "CE",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "Aristóteles da Silva Lima",
            "matricula" : "20151001007",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2021",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "86",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "sigla" :   "IAR",
                            "carga" :   "75",
                            "media" :   "77",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "sigla" :   "IAN",
                            "carga" :   "120",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "sigla" :   "HRW",
                            "carga" :   "75",
                            "media" :   "84",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "sigla" :   "SR",
                            "carga" :   "240",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "sigla" :   "CE",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Segurança da Informação",
                            "sigla" :   "SI",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Administração de Serviços",
                            "sigla" :   "ASE",
                            "carga" :   "240",
                            "media" :   "74",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "sigla" :   "PRJ",
                            "carga" :   "400",
                            "media" :   "89",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Gabriella Macedo Paiva",
            "matricula" : "20151001014",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2020",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "77",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "sigla" :   "IAR",
                            "carga" :   "75",
                            "media" :   "94",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "sigla" :   "IAN",
                            "carga" :   "120",
                            "media" :   "82",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "sigla" :   "HRW",
                            "carga" :   "75",
                            "media" :   "84",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "sigla" :   "SR",
                            "carga" :   "240",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "sigla" :   "CE",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Segurança da Informação",
                            "sigla" :   "SI",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Administração de Serviços",
                            "sigla" :   "ASE",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "sigla" :   "PRJ",
                            "carga" :   "400",
                            "media" :   "99",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Debora Alves da Silva",
            "matricula" : "20151001012",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2022",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "sigla" :   "IAR",
                            "carga" :   "75",
                            "media" :   "98",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "sigla" :   "IAN",
                            "carga" :   "120",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "sigla" :   "HRW",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "sigla" :   "SR",
                            "carga" :   "240",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "sigla" :   "CE",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Segurança da Informação",
                            "sigla" :   "SI",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Administração de Serviços",
                            "sigla" :   "ASE",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "sigla" :   "PRJ",
                            "carga" :   "400",
                            "media" :   "99",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Heloisa Santos Araujo",
            "matricula" : "20151001017",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2022",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "sigla" :   "IPR",
                            "carga" :   "150",
                            "media" :   "98",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "sigla" :   "LIMA",
                            "carga" :   "120",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "sigla" :   "BD",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "sigla" :   "PWBE",
                            "carga" :   "240",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "sigla" :   "PWFE",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados II",
                            "sigla" :   "BD II",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Aplicações Móveis",
                            "sigla" :   "AM",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "sigla" :   "PRJ",
                            "carga" :   "400",
                            "media" :   "99",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Ingrid Paloma da Costa Porto",
            "matricula" : "20151001018",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2018",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "sigla" :   "IPR",
                            "carga" :   "150",
                            "media" :   "94",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "sigla" :   "LIMA",
                            "carga" :   "120",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "sigla" :   "BD",
                            "carga" :   "75",
                            "media" :   "30",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "sigla" :   "PWBE",
                            "carga" :   "240",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "sigla" :   "PWFE",
                            "carga" :   "150",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados II",
                            "sigla" :   "BD II",
                            "carga" :   "300",
                            "media" :   "20",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Aplicações Móveis",
                            "sigla" :   "AM",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "sigla" :   "PRJ",
                            "carga" :   "400",
                            "media" :   "50",
                            "status":   "Exame"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "HÉLIDA BENTO DE OLIVEIRA LINS",
            "matricula" : "20151001016",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2024",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "sigla" :   "IPR",
                            "carga" :   "150",
                            "media" :   "99",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "sigla" :   "LIMA",
                            "carga" :   "120",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "sigla" :   "BD",
                            "carga" :   "75",
                            "media" :   "90",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "sigla" :   "PWBE",
                            "carga" :   "240",
                            "media" :   "64",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "sigla" :   "PWFE",
                            "carga" :   "150",
                            "media" :   "70",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "Isaasc de Sousa Araújo",
            "matricula" : "20151001019",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2022",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "sigla" :   "IPR",
                            "carga" :   "150",
                            "media" :   "90",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "sigla" :   "LIMA",
                            "carga" :   "120",
                            "media" :   "95",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "sigla" :   "BD",
                            "carga" :   "75",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "sigla" :   "PWBE",
                            "carga" :   "240",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "sigla" :   "PWFE",
                            "carga" :   "150",
                            "media" :   "70",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "José Matheus da Silva Miranda",
            "matricula" : "20151001024",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2023",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "sigla" :   "SOP",
                            "carga" :   "75",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "sigla" :   "IPR",
                            "carga" :   "150",
                            "media" :   "40",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "sigla" :   "LIMA",
                            "carga" :   "120",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "sigla" :   "BD",
                            "carga" :   "75",
                            "media" :   "60",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "sigla" :   "PWBE",
                            "carga" :   "240",
                            "media" :   "90",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "sigla" :   "PWFE",
                            "carga" :   "150",
                            "media" :   "80",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        }
];

const getAlunos = function(cursoSigla){
    let siglaCurso = cursoSigla.toLowerCase()
    let alunosCurso = []
    let erro = true

    if(typeof(siglaCurso)!= 'undefined'){
        if(siglaCurso !=''&& siglaCurso.length >1 && siglaCurso.length <4){
            alunos.forEach((baseAlunos)=>{
                baseAlunos.curso.forEach((cursoAtual)=>{
                    if(siglaCurso == cursoAtual.sigla.toLowerCase()){
                        alunosCurso.push({
                            nomeCurso: cursoAtual.nome,
                            nome: baseAlunos.nome,
                            foto: baseAlunos.foto,
                            sexoAluno: baseAlunos.sexo,
                            statusAluno: baseAlunos.status,
                            numeroMatricula: baseAlunos.matricula,
                            disciplinas: cursoAtual.disciplinas
                        }) 
                        erro = false
                    }
                })
            })    
        }
    }
    if(erro)
        return false
    else
        return alunosCurso
}

const getAlunoMatricula = function(matriculaAluno, siglaCurso){
    let sigla = siglaCurso.toLowerCase()
    let matricula = matriculaAluno
    let aluno = {}
    let erro = true

    if(typeof(matricula)!= 'undefined' && typeof(sigla)!='undefined'){
        if(matricula !=''&& matricula.length ==11 && sigla !=''){
            alunos.forEach(baseAlunos=>{
                baseAlunos.curso.forEach(cursoAluno=>{
                    if(matricula == baseAlunos.matricula && sigla == cursoAluno.sigla.toLowerCase()){
                        erro = false
                        aluno.nome= baseAlunos.nome,
                        aluno.foto= baseAlunos.foto,
                        aluno.desempenho= cursoAluno.disciplinas,
                        aluno.sigla = cursoAluno.sigla
                    }
                })
            })
        }
    }

    if(erro)
        return false
    else
        return aluno
}

const getAlunosStatus = function(siglaCurso, statusAtual){
    let sigla = siglaCurso.toLowerCase()
    let statusAluno = statusAtual.toLowerCase()
    let alunosFiltro = []
    let erro = true

    if(typeof(statusAluno)!= 'undefined' && typeof(sigla)!= 'undefined'){
        if(statusAluno !='' && sigla !=''){
            alunos.forEach((baseAlunos)=>{
                baseAlunos.curso.forEach(baseCurso=>{
                    if(baseCurso.sigla.toLowerCase() == sigla && baseAlunos.status.toLowerCase() == statusAluno){
                        alunosFiltro.push({
                            foto: baseAlunos.foto,
                            nome: baseAlunos.nome,
                            statusAluno: baseAlunos.status,
                            numeroMatricula: baseAlunos.matricula
                        })
                        erro = false
                    }
                })
            })
        }
    }
    if(erro)
        return false
    else
        return alunosFiltro
}

const getAlunosAno = function(siglaCurso, anoConclusao){
    let sigla = siglaCurso.toLowerCase()
    let ano = anoConclusao
    let alunosFiltro = []
    let erro = true

    if(typeof(ano)!= 'undefined' && typeof(sigla)!= 'undefined'){
        if(ano !=''&& ano.length ==4 && sigla!=''){
            alunos.forEach((baseAlunos)=>{
                baseAlunos.curso.forEach((baseCurso)=>{
                    if(baseCurso.conclusao == ano && baseCurso.sigla.toLowerCase() == sigla){
                        alunosFiltro.push({
                            foto: baseAlunos.foto,
                            nome: baseAlunos.nome,
                            anoConclusao: baseCurso.conclusao,
                            numeroMatricula: baseAlunos.matricula
                        })
                        erro = false
                    } 
                })
            }) 
        }
    }
    if(erro)
        return false
    else
        return alunosFiltro
}

const getAlunosAnoStatus = function(siglaCurso, statusAluno, anoConclusao){
    let sigla = siglaCurso.toLowerCase()
    let status = statusAluno.toLowerCase()
    let ano = anoConclusao
    let alunosFiltro = []
    let erro = true

    if(typeof(status)!='undefined' && typeof(ano)!='undefined' && typeof(sigla)!='undefined'){
        if(status !=''&&ano !=''&& ano.length ==4 && sigla!=''){
            alunos.forEach((baseAlunos)=>{
                baseAlunos.curso.forEach((baseCurso)=>{
                    if(baseAlunos.status.toLowerCase() == status && baseCurso.conclusao == ano && baseCurso.sigla.toLowerCase() == sigla){
                        erro = false
                        alunosFiltro.push({
                            curso: baseCurso.nome,
                            foto: baseAlunos.foto,
                            nome: baseAlunos.nome,
                            statusAluno: baseAlunos.status,
                            anoConclusao: baseCurso.conclusao,
                            numeroMatricula: baseAlunos.matricula
                        })
                    }
                })
            })
        }
    }
    if(erro)
        return false
    else
        return alunosFiltro
}

module.exports ={
    getAlunos,
    getAlunosAno,
    getAlunosAnoStatus,
    getAlunosStatus,
    getAlunoMatricula
}