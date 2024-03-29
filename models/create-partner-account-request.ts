/*
1Password Partnership API

Trusted by more than 100,000 businesses to protect their data, 1Password gives you complete control over passwords and other sensitive business information. 

As an integral layer of the Identity and Access Management (IAM) stack, 1Password protects all employee accounts – even those you aren't aware of. Give employees secure access to any app or service and safely share everything you need to work together – including logins, documents, credit cards, and more – while keeping everything else private.

1Password is easy to deploy and integrates with Azure AD, Okta, OneLogin, and Slack, so you can automatically provision employees using the systems you already trust. It's simple to manage and fits seamlessly into your team's workflow, so you can secure your business without compromising productivity.

The version of the OpenAPI document: 2.0.0
Contact: partners@1password.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface CreatePartnerAccountRequest
 */
export interface CreatePartnerAccountRequest {
    /**
     * A unique identifier for the end user\'s account to be provisioned. It can be up to 80 chars long and consist of alphanumeric characters and hyphens.
     * @type {string}
     * @memberof CreatePartnerAccountRequest
     */
    'customer_account_uid': string;
    /**
     * Specifies the type of 1Password account plan to provision - \'I\' for Individual, or \'F\' for family.
     * @type {string}
     * @memberof CreatePartnerAccountRequest
     */
    'account_type': string;
    /**
     * Specifies the 1Password domain to provision the account for. For testing it can be one of \'b5test.com\', \'b5test.ca\', or \'b5test.eu\'. For production, it can be one of \'1password.com\', \'1password.ca\', or \'1password.eu\'. Note that domains can only be used after promotions have been created for a given partnership in the specific domain.
     * @type {string}
     * @memberof CreatePartnerAccountRequest
     */
    'domain': string;
    /**
     * Specifies when the 1Password account will be frozen, formatted in RFC-3339.
     * @type {string}
     * @memberof CreatePartnerAccountRequest
     */
    'ends_at'?: string;
}

