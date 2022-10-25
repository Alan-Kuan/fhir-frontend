import Req from './Req'

export async function exportData(_container, _type, _since, _anonymizationConfig, _anonymizationConfigEtag) {
    return Req.get('/$export', {
        headers: {
            Accept: 'application/fhir+json',
            Prefer: 'respond-async',
        },
        params: {
            _container,
            _type,
            _since,
            _anonymizationConfig,
            _anonymizationConfigEtag
        },
    })
        .then(() => true)
        .catch(() => false)
}