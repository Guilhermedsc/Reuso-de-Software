from abc import ABC, abstractmethod


# Produto: interface comum para os relatórios
class Report(ABC):
    @abstractmethod
    def generate(self, content: str) -> str:
        pass


# Produtos concretos: PDFReport e HTMLReport
class PDFReport(Report):
    def generate(self, content: str) -> str:
        return f"PDF Report: {content}"


class HTMLReport(Report):
    def generate(self, content: str) -> str:
        return f"<html><body><p>{content}</p></body></html>"


# Criador: classe abstrata para o Factory Method
class ReportCreator(ABC):
    @abstractmethod
    def create_report(self) -> Report:
        pass


# Criadores concretos: implementam o Factory Method
class PDFReportCreator(ReportCreator):
    def create_report(self) -> Report:
        return PDFReport()


class HTMLReportCreator(ReportCreator):
    def create_report(self) -> Report:
        return HTMLReport()


# Cliente: utiliza o criador para gerar o relatório
def client_code(creator: ReportCreator, content: str):
    report = creator.create_report()
    print(report.generate(content))


# Exemplo de uso
if __name__ == "__main__":
    # Criador de PDF
    pdf_creator = PDFReportCreator()
    client_code(pdf_creator, "Este é um relatório em PDF.")

    # Criador de HTML
    html_creator = HTMLReportCreator()
    client_code(html_creator, "Este é um relatório em HTML.")
