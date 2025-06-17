import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { ChevronDown, ChevronRight, CheckCircle2, Circle } from 'lucide-react'
import './App.css'

// Dados do checklist
const checklistData = {
  "title": "CHECKLIST DE COMISSIONAMENTO - SISTEMA DE COMBATE A INCÊNDIO EM HOSPITAL",
  "sections": [
    {
      "title": "1. SISTEMAS DE PROTEÇÃO PASSIVA",
      "subsections": [
        {
          "title": "1.1 Estrutura e Compartimentação",
          "items": [
            "Resistência ao fogo da estrutura conforme projeto (pilares, vigas, lajes)",
            "Compartimentação horizontal adequada por pavimento",
            "Compartimentação vertical entre andares",
            "Integridade das paredes corta-fogo",
            "Vedação de passagens de tubulações e cabos através de elementos estruturais",
            "Selagem corta-fogo em shafts e dutos",
            "Verificação de TRF (Tempo de Resistência ao Fogo) de todos os elementos"
          ]
        },
        {
          "title": "1.2 Portas e Aberturas",
          "items": [
            "Portas corta-fogo com certificação adequada",
            "Funcionamento correto de fechaduras antipânico",
            "Molas de retorno das portas corta-fogo",
            "Vedação adequada das portas (batente, soleira, laterais)",
            "Sinalização de emergência nas portas",
            "Portas de escape nos locais exigidos",
            "Dimensionamento adequado das saídas de emergência"
          ]
        },
        {
          "title": "1.3 Revestimentos e Acabamentos",
          "items": [
            "Classificação de reação ao fogo dos materiais de acabamento",
            "Revestimentos em rotas de fuga conforme norma",
            "Materiais isolantes térmicos adequados",
            "Verificação de materiais em áreas críticas (UTI, centro cirúrgico)"
          ]
        }
      ]
    },
    {
      "title": "2. SISTEMAS DE PROTEÇÃO ATIVA",
      "subsections": [
        {
          "title": "2.1 Sistema de Detecção e Alarme de Incêndio",
          "items": [
            "Central de alarme instalada e programada",
            "Detectores de fumaça em todos os ambientes exigidos",
            "Detectores de temperatura em locais específicos",
            "Detectores de chama em áreas de risco",
            "Acionadores manuais (botoeiras) posicionados adequadamente",
            "Sirenes e sinalizadores audiovisuais funcionando",
            "Teste de funcionamento de todos os detectores",
            "Verificação de zonas de detecção conforme projeto",
            "Integração com sistema de automação predial",
            "Supervisão remota operacional",
            "Fonte de alimentação principal e backup (baterias/gerador)"
          ]
        },
        {
          "title": "2.2 Sistema de Iluminação de Emergência",
          "items": [
            "Luminárias de emergência em todas as rotas de fuga",
            "Blocos autônomos com autonomia mínima de 1 hora",
            "Sinalização fotoluminescente adequada",
            "Teste de autonomia das baterias",
            "Funcionamento automático em caso de falta de energia",
            "Níveis de iluminamento conforme norma",
            "Sinalização de saídas de emergência"
          ]
        },
        {
          "title": "2.3 Sistema de Sprinklers",
          "items": [
            "Reservatório de incêndio com capacidade adequada",
            "Bombas de incêndio principal e reserva (jockey)",
            "Rede de distribuição dimensionada conforme projeto",
            "Sprinklers instalados conforme espaçamento e cobertura",
            "Válvulas de governo e controle",
            "Manômetros e pressostatos",
            "Teste hidrostático da tubulação",
            "Teste de vazão e pressão",
            "Drenagem adequada do sistema",
            "Supervisão elétrica de válvulas"
          ]
        },
        {
          "title": "2.4 Sistema de Hidrantes",
          "items": [
            "Hidrantes externos (urbanos) posicionados adequadamente",
            "Hidrantes internos em todos os pavimentos",
            "Mangueiras de incêndio adequadas e testadas",
            "Esguichos reguláveis instalados",
            "Chaves para hidrantes disponíveis",
            "Sinalização dos hidrantes",
            "Teste de vazão e pressão",
            "Acessibilidade aos hidrantes"
          ]
        },
        {
          "title": "2.5 Sistema de Gases Limpos/CO2",
          "items": [
            "Central de gases em ambientes específicos (CPD, arquivo)",
            "Cilindros de gás com carga adequada",
            "Difusores posicionados conforme projeto",
            "Sistema de detecção específico para liberação",
            "Sinalização de abandono de área",
            "Temporizadores de retardo",
            "Válvulas de alívio de pressão",
            "Testes de estanqueidade dos ambientes"
          ]
        }
      ]
    },
    {
      "title": "3. SISTEMAS DE CONTROLE DE FUMAÇA",
      "subsections": [
        {
          "title": "3.1 Pressurização de Escadas",
          "items": [
            "Ventiladores de pressurização instalados",
            "Dampers corta-fogo automáticos",
            "Grelhas de admissão de ar",
            "Controle de pressão diferencial",
            "Teste de funcionamento do sistema",
            "Medição de velocidade do ar nas aberturas",
            "Integração com sistema de detecção"
          ]
        },
        {
          "title": "3.2 Exaustão de Fumaça",
          "items": [
            "Exaustores de fumaça em átrios e areas amplas",
            "Aberturas de alívio dimensionadas",
            "Controle automático de acionamento",
            "Resistência ao fogo dos equipamentos",
            "Teste de funcionamento"
          ]
        }
      ]
    },
    {
      "title": "4. INSTALAÇÕES COMPLEMENTARES",
      "subsections": [
        {
          "title": "4.1 Energia de Emergência",
          "items": [
            "Gerador de emergência com capacidade adequada",
            "Quadros elétricos de emergência",
            "Transferência automática funcionando",
            "Combustível suficiente para autonomia mínima",
            "Teste de funcionamento sob carga"
          ]
        },
        {
          "title": "4.2 Elevadores de Emergência",
          "items": [
            "Elevador de bombeiros instalado e funcionando",
            "Chave de comando dos bombeiros",
            "Comunicação de emergência no elevador",
            "Fonte de energia independente",
            "Acesso adequado ao pavimento térreo"
          ]
        }
      ]
    },
    {
      "title": "5. DOCUMENTAÇÃO E CERTIFICAÇÕES",
      "subsections": [
        {
          "title": "5.1 Documentos Técnicos",
          "items": [
            "Projeto técnico aprovado pelo Corpo de Bombeiros",
            "ART (Anotação de Responsabilidade Técnica) dos sistemas",
            "Certificados de conformidade dos equipamentos",
            "Laudos de testes hidrostáticos",
            "Relatórios de comissionamento",
            "Manual de operação e manutenção",
            "Cronograma de manutenções preventivas"
          ]
        },
        {
          "title": "5.2 Treinamentos",
          "items": [
            "Treinamento da equipe de manutenção",
            "Treinamento da brigada de incêndio",
            "Manual de procedimentos de emergência",
            "Simulados de evacuação realizados"
          ]
        }
      ]
    },
    {
      "title": "6. VERIFICAÇÕES ESPECÍFICAS PARA HOSPITAIS",
      "subsections": [
        {
          "title": "6.1 Áreas Críticas",
          "items": [
            "UTI com sistema de detecção específico",
            "Centro cirúrgico com proteção adequada",
            "Farmácia com sistema específico para medicamentos",
            "Lavanderia com detecção e supressão adequada",
            "Cozinha com sistema de supressão em coifas",
            "Depósitos de gases medicinais protegidos",
            "Geradores de oxigênio com proteção específica"
          ]
        },
        {
          "title": "6.2 Evacuação Hospitalar",
          "items": [
            "Macas de evacuação disponíveis",
            "Áreas de refúgio dimensionadas",
            "Elevadores de emergência para pacientes",
            "Comunicação visual e sonora diferenciada",
            "Rotas de evacuação para pacientes acamados",
            "Sistema de comunicação de emergência"
          ]
        }
      ]
    },
    {
      "title": "7. TESTES FINAIS E ACEITE",
      "subsections": [
        {
          "title": "7.1 Testes Integrados",
          "items": [
            "Teste geral de todos os sistemas",
            "Simulação de situações de emergência",
            "Verificação de integração entre sistemas",
            "Teste de comunicação com Corpo de Bombeiros",
            "Medição de tempos de resposta"
          ]
        },
        {
          "title": "7.2 Aceite Final",
          "items": [
            "Vistoria final do Corpo de Bombeiros",
            "Emissão do Auto de Vistoria do Corpo de Bombeiros (AVCB)",
            "Entrega de toda documentação",
            "Termo de aceite assinado",
            "Garantias dos equipamentos ativadas"
          ]
        }
      ]
    }
  ]
};

function App() {
  const [checkedItems, setCheckedItems] = useState({});
  const [collapsedSections, setCollapsedSections] = useState({});

  // Carregar progresso do localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('checklistProgress');
    if (savedProgress) {
      setCheckedItems(JSON.parse(savedProgress));
    }
  }, []);

  // Salvar progresso no localStorage
  useEffect(() => {
    localStorage.setItem('checklistProgress', JSON.stringify(checkedItems));
  }, [checkedItems]);

  // Calcular progresso total
  const calculateProgress = () => {
    let totalItems = 0;
    let checkedCount = 0;

    checklistData.sections.forEach((section, sectionIndex) => {
      section.subsections.forEach((subsection, subsectionIndex) => {
        subsection.items.forEach((item, itemIndex) => {
          totalItems++;
          const itemId = `item-${sectionIndex}-${subsectionIndex}-${itemIndex}`;
          if (checkedItems[itemId]) {
            checkedCount++;
          }
        });
      });
    });

    return totalItems === 0 ? 0 : (checkedCount / totalItems) * 100;
  };

  const handleItemCheck = (itemId, checked) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: checked
    }));
  };

  const toggleSection = (sectionIndex) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex]
    }));
  };

  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-gray-800">
              {checklistData.title}
            </CardTitle>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Progresso</span>
                <span className="text-sm font-medium">{Math.round(progress)}% Completo</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          </CardHeader>
        </Card>

        <div className="space-y-4">
          {checklistData.sections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="overflow-hidden">
              <CardHeader 
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleSection(sectionIndex)}
              >
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{section.title}</span>
                  {collapsedSections[sectionIndex] ? 
                    <ChevronRight className="h-5 w-5" /> : 
                    <ChevronDown className="h-5 w-5" />
                  }
                </CardTitle>
              </CardHeader>
              
              {!collapsedSections[sectionIndex] && (
                <CardContent className="space-y-4">
                  {section.subsections.map((subsection, subsectionIndex) => (
                    <div key={subsectionIndex} className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-semibold text-gray-700 mb-3">{subsection.title}</h3>
                      <div className="space-y-2">
                        {subsection.items.map((item, itemIndex) => {
                          const itemId = `item-${sectionIndex}-${subsectionIndex}-${itemIndex}`;
                          const isChecked = checkedItems[itemId] || false;
                          
                          return (
                            <div key={itemIndex} className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
                              <Checkbox
                                id={itemId}
                                checked={isChecked}
                                onCheckedChange={(checked) => handleItemCheck(itemId, checked)}
                                className="mt-1"
                              />
                              <label 
                                htmlFor={itemId} 
                                className={`text-sm cursor-pointer flex-1 ${
                                  isChecked ? 'line-through text-gray-500' : 'text-gray-700'
                                }`}
                              >
                                {item}
                              </label>
                              {isChecked && <CheckCircle2 className="h-4 w-4 text-green-500 mt-1" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {progress === 100 && (
          <Card className="mt-6 bg-green-50 border-green-200">
            <CardContent className="text-center py-6">
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-green-800">Checklist Completo!</h3>
              <p className="text-green-600">Todos os itens foram verificados com sucesso.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default App
