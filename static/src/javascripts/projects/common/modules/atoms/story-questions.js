// @flow

import $ from 'lib/$';
import bean from 'bean';
import { submitComponentEvent } from 'common/modules/commercial/acquisitions-ophan';
import config from 'lib/config';
import { getViewport } from 'lib/detect';
import fastdom from 'fastdom';
import fetch from 'lib/fetch';
import { getUserFromApi } from 'common/modules/identity/api';
import mediator from 'lib/mediator';
import ophan from 'ophan/ng';

const sendOldStyleInteraction = (
    atomId: string,
    component: string,
    value: string
): void => {
    ophan.record({
        atomId,
        component,
        value,
    });
};

const sendNewStyleInteraction = (
    atomId: string,
    action: OphanAction,
    value?: string,
    eventId?: string
): void => {
    submitComponentEvent({
        action,
        component: {
            componentType: 'READERS_QUESTIONS_ATOM',
            id: atomId,
        },
        id: eventId,
        value,
    });
};

const askQuestion = (
    event: Event,
    isEmailSubmissionReady: boolean,
    isDeliveryTestReady: boolean
): void => {
    event.preventDefault();

    const atomIdElement = $('.js-storyquestion-atom-id');
    const askQuestionBtn = event.currentTarget.querySelector(
        '.user__question-upvote'
    );

    if (askQuestionBtn && atomIdElement) {
        const questionId = askQuestionBtn.dataset.questionId;
        const atomId = atomIdElement.attr('id');

        const question = document.querySelector(
            `meta[name=js-notranslate-${questionId}]`
        );

        if (question) {
            const questionText = question.content;

            if (questionText && atomId) {
                if (isDeliveryTestReady) {
                    const askActionHeader = document.getElementById(
                        `js-question-set-header-${atomId}`
                    );
                    const submitActionHeader = document.getElementById(
                        `js-delivery-selection-header-${atomId}`
                    );

                    const questionList = Array.from(
                        document.querySelectorAll(
                            `.js-question-set-body-${atomId}`
                        )
                    );
                    const answerDeliveryOptions = document.getElementById(
                        `js-delivery-selection-body-${atomId}`
                    );

                    if (
                        askActionHeader &&
                        questionList &&
                        submitActionHeader &&
                        answerDeliveryOptions
                    ) {
                        submitActionHeader.classList.remove('is-hidden');
                        answerDeliveryOptions.classList.remove('is-hidden');

                        askActionHeader.classList.add('is-hidden');
                        questionList.forEach(({ classList }) => {
                            classList.add('is-hidden');
                        });
                    }
                } else {
                    if (askQuestionBtn) {
                        askQuestionBtn.classList.add('is-hidden');
                    }

                    if (isEmailSubmissionReady) {
                        const signupForm =
                            document.forms[
                                `js-storyquestion-email-signup-form-${questionId}`
                            ];
                        const thankYouMessageForEmailSubmission = document.getElementById(
                            `js-question-thankyou-${questionId}`
                        );

                        if (thankYouMessageForEmailSubmission && signupForm) {
                            thankYouMessageForEmailSubmission.classList.remove(
                                'is-hidden'
                            );
                            signupForm.classList.remove('is-hidden');
                        }
                    } else {
                        const thankYouMessageNoEmailSubmission = document.getElementById(
                            `js-thankyou-message-no-submission-${questionId}`
                        );

                        if (thankYouMessageNoEmailSubmission) {
                            thankYouMessageNoEmailSubmission.classList.remove(
                                'is-hidden'
                            );
                        }
                    }
                }

                sendOldStyleInteraction(
                    atomId.trim(),
                    questionText.trim(),
                    'question_asked'
                );
                sendNewStyleInteraction(
                    atomId.trim(),
                    'VOTE',
                    questionText.trim(),
                    questionId
                );
            }
        }
    }
};

const submitSignUpForm = (event: Event): void => {
    event.preventDefault();

    const answersEmailSignupForm = event.currentTarget;
    const email = answersEmailSignupForm.elements.email;
    const listId = answersEmailSignupForm.listId;
    const questionId =
        answersEmailSignupForm && answersEmailSignupForm.dataset.questionId;
    const atomIdElement = $('.js-storyquestion-atom-id');
    const question = document.querySelector(
        `meta[name=js-notranslate-${questionId}]`
    );

    if (email && listId && questionId) {
        fetch(`${config.get('page.ajaxUrl')}/story-questions/answers/signup`, {
            mode: 'cors',
            method: 'POST',
            body: { email: email.value, listId: listId.value },
        }).then(({ ok }) => {
            if (ok) {
                const submissionContainerEl =
                    answersEmailSignupForm.parentElement;
                const thankyouMessage = document.getElementById(
                    `js-final-thankyou-message-${questionId}`
                );

                if (submissionContainerEl && thankyouMessage) {
                    submissionContainerEl.classList.add('is-hidden');
                    thankyouMessage.classList.remove('is-hidden');
                }
            }
        });

        const atomId = atomIdElement.attr('id');
        const questionText = question && question.content;

        sendNewStyleInteraction(
            atomId.trim(),
            'SUBSCRIBE',
            questionText.trim(),
            questionId
        );
    }
};

const submitDeliveryPreference = (event: Event): void => {
    event.preventDefault();

    const prefAnswerDeliveryBtn = event.target;
    const prefAnswerDelivery =
        prefAnswerDeliveryBtn && prefAnswerDeliveryBtn.dataset.deliveryMethod;

    const atomIdElement = $('.js-storyquestion-atom-id');
    const atomId = atomIdElement.attr('id');

    if (prefAnswerDelivery) {
        const thankyouMessageHeader = document.getElementById(
            `js-final-thank-you-header-${atomId}`
        );
        const thankyouMessageBody = document.getElementById(
            `js-final-thank-you-body-${atomId}`
        );

        const submitHeader = document.getElementById(
            `js-delivery-selection-header-${atomId}`
        );
        const submitContainer = document.getElementById(
            `js-delivery-selection-body-${atomId}`
        );

        if (
            thankyouMessageHeader &&
            thankyouMessageBody &&
            submitContainer &&
            submitHeader
        ) {
            submitContainer.classList.add('is-hidden');
            submitHeader.classList.add('is-hidden');
            thankyouMessageHeader.classList.remove('is-hidden');
            thankyouMessageBody.classList.remove('is-hidden');
        }
    }

    sendNewStyleInteraction(atomId.trim(), 'SUBSCRIBE', prefAnswerDelivery);
};

const init = (): void => {
    const atomId = $('.js-storyquestion-atom-id').attr('id');

    const isEmailSubmissionReadyElement = document.getElementById(
        'js-storyquestion-is-email-submission-ready'
    );
    const isDeliveryTestReadyElement = document.getElementById(
        'js-storyquestion-is-answer-delivery-test-ready'
    );

    const isEmailSubmissionReady =
        isEmailSubmissionReadyElement &&
        isEmailSubmissionReadyElement.dataset.isEmailSubmissionReady === 'true';
    const isDeliveryTestReady =
        isDeliveryTestReadyElement &&
        isDeliveryTestReadyElement.dataset.isAnswerDeliveryTestReady === 'true';

    const askQuestionLinks = $('.js-ask-question-link');

    const answersDeliveryPreferences = document.querySelectorAll(
        `.btn-answer-delivery-${atomId}`
    );
    const answerDeliveryPrefContainer = document.getElementById(
        `js-delivery-selection-body-${atomId}`
    );

    askQuestionLinks.each(el => {
        bean.on(el, 'click', function(event) {
            askQuestion(event, isEmailSubmissionReady, isDeliveryTestReady);
            this.classList.add('is-clicked');
        });
    });

    if (answerDeliveryPrefContainer) {
        const deliveryPrefList = Array.from(answersDeliveryPreferences);

        const pool = [0, 1, 2];
        const flush = [];
        while (pool.length > 0) {
            const rand = Math.random() * pool.length || 0;
            flush.push(pool[rand]);
            pool.splice(rand, 1);
        }

        flush.forEach(num => {
            const relevantBtn = deliveryPrefList[num];
            answerDeliveryPrefContainer.insertBefore(relevantBtn, null);
        });

        bean.one(
            answerDeliveryPrefContainer,
            'click',
            deliveryPrefList,
            function(event) {
                submitDeliveryPreference(event);
                this.classList.add('is-clicked');
            }
        );
    }

    const finalCloseBtn = document.getElementById(
        `js-final-thankyou-message-${atomId}`
    );

    if (finalCloseBtn) {
        bean.one(finalCloseBtn, 'click', function(event) {
            event.preventDefault();
            const storyQuestionAtom = document.getElementById(
                `user__question-atom-${atomId}`
            );

            if (storyQuestionAtom) {
                storyQuestionAtom.classList.add('is-hidden');
            }

            this.classList.add('is-clicked');
        });
    }

    const answersEmailSignupForms = $('.js-storyquestion-email-signup-form');

    answersEmailSignupForms.each(el => {
        bean.on(el, 'submit', submitSignUpForm);
    });

    getUserFromApi(userFromId => {
        if (userFromId && userFromId.primaryEmailAddress) {
            fastdom.write(() => {
                $('.js-storyquestion-email-signup-form').each(form => {
                    $(
                        '.js-storyquestion-email-signup-button',
                        form
                    ).removeClass('button--with-input');
                    $(
                        '.js-storyquestion-email-signup-input-container',
                        form
                    ).addClass('is-hidden');
                    $('.js-storyquestion-email-signup-input', form).val(
                        userFromId.primaryEmailAddress
                    );
                    $('.inline-envelope', form).addClass(
                        'storyquestion-email-signup-button-envelope'
                    );
                });
            });
        }
    });

    const storyQuestionsComponent = document.querySelector(
        '.js-view-tracking-component'
    );
    const atomElement = $('.js-storyquestion-atom-id');

    if (storyQuestionsComponent && atomElement) {
        mediator.on('window:throttledScroll', function onScroll() {
            const height = getViewport().height;
            const coords = storyQuestionsComponent.getBoundingClientRect();
            const isStoryQuestionsInView =
                coords.top >= 0 && coords.bottom <= height;

            if (isStoryQuestionsInView) {
                let atomAttrId = atomElement.attr('id');

                if (atomAttrId) {
                    atomAttrId = atomAttrId.trim();

                    sendOldStyleInteraction(
                        atomAttrId,
                        atomAttrId,
                        'question_component_in_view'
                    );

                    sendNewStyleInteraction(atomAttrId, 'VIEW');
                }

                mediator.off('window:throttledScroll', onScroll);
            }
        });
    }
};

export { init };
