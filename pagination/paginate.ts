/*
1Password Partnership API

Trusted by more than 100,000 businesses to protect their data, 1Password gives you complete control over passwords and other sensitive business information. 

As an integral layer of the Identity and Access Management (IAM) stack, 1Password protects all employee accounts – even those you aren't aware of. Give employees secure access to any app or service and safely share everything you need to work together – including logins, documents, credit cards, and more – while keeping everything else private.

1Password is easy to deploy and integrates with Azure AD, Okta, OneLogin, and Slack, so you can automatically provision employees using the systems you already trust. It's simple to manage and fits seamlessly into your team's workflow, so you can secure your business without compromising productivity.

The version of the OpenAPI document: 2.0.0
Contact: partners@1password.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { PageBase, PageInfo, PageParameters } from "./page-types";
import { Page } from "./page";
import { PageRequest } from "./pageable";

export const paginate = <
  Data extends PageInfo,
  Parameters extends PageParameters
>({
  request,
  initialParameters,
}: {
  request: PageRequest<Data, Parameters>;
  initialParameters: Parameters;
}): Promise<PageBase<Data, Parameters>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await request(initialParameters);
      resolve(
        new Page({
          data: data.data,
          initialParameters,
          request: (parameters) => request(parameters),
        })
      );
    } catch (error) {
      reject(error);
    }
  });
};
