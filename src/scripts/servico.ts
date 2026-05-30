const dbUrl = import.meta.env.VITE_DATABASE_URL;
const servicoUrl = `${dbUrl}/servicos`;

export async function createServico(servicoName: string, servicoPrice: number): Promise<boolean> {
    try {
        const servico = await fetch(servicoUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome_servico: servicoName,
                valor_servico: servicoPrice
            }),
        });
        console.log("Serviço criado com sucesso.", servico.body);
        return true;

    } catch (e) {
        console.error(e);
        return false;
    }
}

export async function getAllServicos() {
    try {
        const response = await fetch(servicoUrl, {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"  
            }
        })
        console.log("Serviços retornados com suecesso.");
        return response.body?.values;
    } catch (e) {
        console.error(e);
    }
}