// @flow
import { makeABTest } from 'common/modules/commercial/contributions-utilities';
import config from 'lib/config';

const campaignTag = 'us-news/series/break-the-cycle';

const tagsMatch = () =>
    config
        .get('page.nonKeywordTagIds', '')
        .split(',')
        .includes(campaignTag);

export const acquisitionsEpicUSGunCampaignPayingMembers = makeABTest({
    id: 'AcquisitionsUsGunCampaign2017PayingMembers',
    campaignId: 'epic_us_gun_campaign_2017',

    start: '2017-11-14',
    expiry: '2018-01-04',

    author: 'Guy Dawson',
    description: 'Show a custom Epic for articles with the US gun campaign tag to paying members',
    successMeasure: 'AV2.0',
    idealOutcome:
        'The US gun campaign resonates with our readers, and we continue to provide quality reporting on this important issue',
    audienceCriteria: 'All',
    audience: 1,
    audienceOffset: 0,
    canRun: tagsMatch,
    showToContributorsAndSupporters: true,
    variants: [
        {
            id: 'control',
            products: ['CONTRIBUTION'],
            options: {
                isUnlimited: false,
                maxViews: {
                    days: 7,
                    count: 4,
                    minDaysBetweenViews: 0,
                },
                usesIframe: true,
                template: variant =>
                    `<iframe src="https://interactive.guim.co.uk/embed/2017/11/break-the-cycle/epic.html"
                        data-component="${variant.options.componentName}"
                        class="acquisitions-epic-iframe"
                        id="${variant.options.iframeId}">
                    </iframe>`,
            },
        },
    ],
});
