import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

const ufList = [
	{ key: 'o', text: 'Alagoas', value: 'AL' },
	{ key: 'f', text: 'Paraíba', value: 'PB' },
	{ key: 'm', text: 'Pernambuco', value: 'PE' },
  ]

class FormEntregador extends React.Component{

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

                            <Form.Group>

									<Form.Input
										required
                                        fluid
										label='Nome'
                                        width={10}>                                
									</Form.Input>

                                    <Form.Input
										required
                                        fluid
										label='CPF'
                                        width={4}>                        
									</Form.Input>

                                    <Form.Input
                                        
                                        fluid
                                        label='RG'
                                        width={4}>                                                                     
                                    </Form.Input>

								</Form.Group>

                                <Form.Group>

									<Form.Input
										
                                        fluid
										label='DT Nascimento'
                                        width={3}>                                
									</Form.Input>

                                    <Form.Input
										required
                                        fluid
										label='Fone Celular'
                                        width={4}>                        
									</Form.Input>

                                    <Form.Input
                                        
                                        fluid
                                        label='Fone Fixo'
                                        width={4}>                                                                     
                                    </Form.Input>

                                    <Form.Input
                                        
                                        fluid
                                        label='QTD Entregas Realizadas'
                                        width={3}>                                                                     
                                    </Form.Input>

                                    <Form.Input
                                        
                                        fluid
                                        label='Valor por frete'
                                        width={3}>                                                                     
                                    </Form.Input>

								</Form.Group>

								
								<Form.Group>

									<Form.Input
                                        
										fluid
										label='Rua'
                                        width={13}>
										
									</Form.Input>
									
                                    <Form.Input
                                        fluid
                                        label='Número'
                                        width={4}>
                                                                          
                                    </Form.Input>

								</Form.Group>

                                <Form.Group>

									<Form.Input
										
                                        fluid
										label='Bairro'
                                        width={10}>                                
									</Form.Input>

                                    <Form.Input
										
                                        fluid
										label='Cidade'
                                        width={10}>                        
									</Form.Input>

                                    <Form.Input
                                        
                                        fluid
                                        label='CEP'
                                        width={4}>                                                                     
                                    </Form.Input>

								</Form.Group>

                                    <Form.Input
                                        
                                        fluid
                                        label='UF'
                                        width={100}>                                                                     
                                    </Form.Input>

                                    <Form.Select
									fluid
									label='UF'
									options={ufList}
									placeholder='Selecione'

								/>

                                    <Form.Input
                                        
                                        fluid
                                        label='Complmento'
                                        width={100}>                                                                     
                                    </Form.Input>

                                    <Form.Group inline>

									<label>Ativo: </label>

									<Form.Radio
										label='Sim'
										
									/>
									
									<Form.Radio
										label='Não'
										
									/>

								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
										Voltar
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

export default FormEntregador;