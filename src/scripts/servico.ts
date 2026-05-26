const dbUrl = import.meta.env.VITE_DATABASE_URL;

export async function createServico(servicoName: string, servicoPrice: number): Promise<boolean> {
    const servicoUrl = `${dbUrl}/servicos`;

    try {
        alert(servicoUrl);
        const servico = await fetch(servicoUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome_servico: servicoName,
                valor_servico: servicoPrice
            })
        });
        console.log("Serviço criado com sucesso.", servico.body);
        return true;

    } catch (e) {
        console.error(e);
        return false;
    }
}