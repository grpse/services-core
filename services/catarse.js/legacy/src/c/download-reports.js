import m from 'mithril';
import _ from 'underscore';

const downloadReports = {
    view: function(ctrl, args) {
        const project = args.project(),
            paymentState = project.state === 'failed' ? 'paid,refunded' : 'paid',
            paidRewards = _.filter(args.rewards, reward => reward.paid_count > 0);

        return m('section.min-height-70',
            m('.w-section',
                m('article',
                    m('.section.project-metrics',
                        m('.w-container',
                            m('.w-row', [
                                m('.w-col.w-col-2'),
                                m('.w-col.w-col-8',
                                    m('.card.u-radius.u-marginbottom-20.card-terciary', [
                                        m('.fontsize-small.fontweight-semibold.u-marginbottom-20', [
                                            m('span.fa.fa-download',
                                                m.trust('&nbsp;')
                                            ),
                                            'Baixar relatórios'
                                        ]),
                                        m('.card.u-radius.u-marginbottom-20', [
                                            m('span.fontweight-semibold',
                                                m.trust('Atenção:')
                                            ),
                                            'Ao realizar o download desses dados, você se compromete a armazená-los em local seguro e respeitar o direitos dos usuários conforme o que está previsto nos Termos de Uso e na política de privacidade do Catarse.'
                                        ]),
                                        m('ul.w-list-unstyled', [
                                            m('li.fontsize-smaller.u-marginbottom-10',
                                                m('div', [
                                                    'Apoiadores confirmados ',
                                                    m.trust('&nbsp;'),
                                                    m(`a.alt-link[href='/pt/reports/contribution_reports_for_project_owners.csv?project_id=${project.project_id}&amp;state=${paymentState}']`,
                                                        'CSV'
                                                    ),
                                                    m.trust('&nbsp;'),
                                                    '\\',
                                                    m.trust('&nbsp;'),
                                                    m(`a.alt-link[href='/pt/reports/contribution_reports_for_project_owners.xls?project_id=${project.project_id}&amp;state=${paymentState}']`,
                                                        'XLS'
                                                    )
                                                ])
                                            ),
                                            m('li.divider.u-marginbottom-10'),
                                            m('li.fontsize-smaller.u-marginbottom-10',
                                                m('div', [
                                                    'Apoiadores pendentes',
                                                    m.trust('&nbsp;'),
                                                    m.trust('&nbsp;'),
                                                    m(`a.alt-link[href='/pt/reports/contribution_reports_for_project_owners.csv?project_id=${project.project_id}&amp;state=pending&amp;waiting_payment=true']`,
                                                        'CSV'
                                                    ),
                                                    m.trust('&nbsp;'),
                                                    '\\',
                                                    m.trust('&nbsp;'),
                                                    m(`a.alt-link[href='/pt/reports/contribution_reports_for_project_owners.xls?project_id=${project.project_id}&amp;state=pending&amp;waiting_payment=true']`,
                                                        'XLS'
                                                    )
                                                ])
                                            ),
                                            m('li.divider.u-marginbottom-10'),
                                            m('li.fontsize-smaller.u-marginbottom-10',
                                                m('div', [
                                                    'Apoiadores que não selecionaram recompensa',
                                                    m.trust('&nbsp;'),
                                                    m.trust('&nbsp;'),
                                                    m(`a.alt-link[href='/pt/reports/contribution_reports_for_project_owners.csv?project_id=${project.project_id}&amp;reward_id=0&amp;state=${paymentState}']`,
                                                        'CSV'
                                                    ),
                                                    m.trust('&nbsp;'),
                                                    '\\',
                                                    m.trust('&nbsp;'),
                                                    m(`a.alt-link[href='/pt/reports/contribution_reports_for_project_owners.xls?project_id=${project.project_id}&amp;reward_id=0&amp;state=${paymentState}']`,
                                                        'XLS'
                                                    )
                                                ])
                                            ),
                                            m('li.divider.u-marginbottom-10'),
                                            m('li.fontsize-smaller.u-marginbottom-10',
                                                m('div', [
                                                    'Apoios cancelados após o pagamento',
                                                    m.trust('&nbsp;'),
                                                    m.trust('&nbsp;'),
                                                    m(`a.alt-link[href='/pt/reports/contribution_reports_for_project_owners.csv?project_id=${project.project_id}&amp;state=refunded,chargeback']`,
                                                        'CSV'
                                                    ),
                                                    m.trust('&nbsp;'),
                                                    '\\',
                                                    m.trust('&nbsp;'),
                                                    m(`a.alt-link[href='/pt/reports/contribution_reports_for_project_owners.xls?project_id=${project.project_id}&amp;state=refunded,chargeback']`,
                                                        'XLS'
                                                    )
                                                ])
                                            ),
                                            _.map(paidRewards, reward => [
                                                m('li.divider.u-marginbottom-10'),
                                                m('li.fontsize-smaller.u-marginbottom-10',
                                                    m('div', [
                                                        `R$ ${reward.minimum_value} ${reward.description.substring(0, 40)}...;`,
                                                        m(`a.alt-link[href='/pt/reports/contribution_reports_for_project_owners.csv?project_id=${project.project_id}&amp;reward_id=${reward.id}&amp;state=${paymentState}']`,
                                                            'CSV'
                                                        ),
                                                        m.trust('&nbsp;'),
                                                        '\\',
                                                        m.trust('&nbsp;'),
                                                        m(`a.alt-link[href='/pt/reports/contribution_reports_for_project_owners.xls?project_id=${project.project_id}&amp;reward_id=${reward.id}&amp;state=${paymentState}']`,
                                                            'XLS'
                                                        )
                                                    ])
                                                )
                                            ]),
                                            m('li.divider.u-marginbottom-10')
                                        ])
                                    ])
                                ),
                                m('.w-col.w-col-2')
                            ])
                        )
                    )
                )
            )
        );
    }
};

export default downloadReports;
