// Interface comum
class Notificacao {
    enviar(mensagem) {
        throw new Error("Método enviar() deve ser implementado")
    }
}

// Implementações concretas
class EmailNotificacao extends Notificacao {
    enviar(mensagem) {
        console.log(`📧 Enviando E-mail: ${mensagem}`)
    }
}

class SMSNotificacao extends Notificacao {
    enviar(mensagem) {
        console.log(`📩 Enviando SMS: ${mensagem}`)
    }
}

class PushNotificacao extends Notificacao {
    enviar(mensagem) {
        console.log(`🔔 Enviando Push Notification: ${mensagem}`)
    }
}

// Fábricas concretas
class NotificacaoFactory {
    static criar(tipo) {
        switch (tipo) {
            case "email":
                return new EmailNotificacao()
            case "sms":
                return new SMSNotificacao()
            case "push":
                return new PushNotificacao()
            default:
                throw new Error("Tipo de notificação inválido")
        }
    }
}

// Testando o Factory
const notificacao1 = NotificacaoFactory.criar("email")
notificacao1.enviar("Bem-vindo ao nosso sistema!")

const notificacao2 = NotificacaoFactory.criar("sms")
notificacao2.enviar("Seu código de verificação é 1234")

const notificacao3 = NotificacaoFactory.criar("push")
notificacao3.enviar("Você recebeu uma nova mensagem.")
