import React from 'react';
import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox';
import {
  FormattedDate,
  FormattedDateParts,
  FormattedDateTimeRange,
  FormattedDisplayName,
  FormattedList,
  FormattedListParts, FormattedMessage,
  FormattedNumber,
  FormattedNumberParts,
  FormattedPlural,
  FormattedRelativeTime,
  FormattedTime,
  FormattedTimeParts, useIntl
} from "react-intl";

export const UseIntlProto = () => {
  const intl = useIntl();
}

export const UseIntlFormatNumberProto = () => {
  const intl = useIntl();
  const formattedNumber = intl.formatNumber(20.123, {style: "decimal", maximumFractionDigits: 2});
}

export const UseIntlFormatDateProto = () => {
  const intl = useIntl();
  const formattedDate = intl.formatDate(Date.now(), {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });
}

export const UseIntlFormatTimeProto = () => {
  const intl = useIntl();
  const formattedTime = intl.formatTime(Date.now());
}

export const UseIntlFormatListProto = () => {
  const intl = useIntl();
  const formattedList = intl.formatList(['Me', 'myself', 'I'], {type: 'conjunction'})
}

export const PaletteTree = () => (
  <Palette>
    <Category name="Messages">
      <Component name="FormattedMessage">
        <Variant>
          <FormattedMessage
              id="id"
              description=""
              defaultMessage="Hello, {name}!"
              values={{
                name: 'World',
              }}
          />
        </Variant>
      </Component>
      <Component name={"FormattedPlural"}>
        <Variant>
            <FormattedPlural
                value={10}
                one="message"
                other="messages"
            />
        </Variant>
      </Component>
      <Component name="FormattedList">
        <Variant>
          <FormattedList
              type="conjunction"
              value={['one', 'two', 'three']}
          />
        </Variant>
      </Component>
      <Component name="FormattedListParts">
        <Variant>
          <FormattedListParts
              type="conjunction"
              value={['one', 'two', 'three']}
          >
            {
              (parts) => {
                return (
                    <>
                      {parts.map((part) => {
                        return part.value
                      })}
                    </>
                )
              }
            }
          </FormattedListParts>
        </Variant>
      </Component>
      <Component name="FormattedDisplayName">
        <Variant name={"Language"}>
          <FormattedDisplayName
              type="language"
              value="zh-Hans-SG"
          />
        </Variant>
        <Variant name={"Currency"}>
          <FormattedDisplayName
              type="currency"
              value="JPY"
          />
        </Variant>
      </Component>
      <Component name="FormattedNumber">
        <Variant>
          <FormattedNumber
              value={0}
          />
        </Variant>
        <Variant name="Money">
          <FormattedNumber
              value={0}
              style="currency"
              currency="USD"
          />
        </Variant>
        <Variant name="Integer">
          <FormattedNumber
              value={0}
              maximumFractionDigits={0}
          />
        </Variant>
      </Component>
      <Component name="FormattedNumberParts">
        <Variant>
          <FormattedNumberParts
              value={0}
          >
            {
              (parts) => {
                return (
                    <>
                      {parts.map((part) => {
                        return part.value
                      })}
                    </>
                )
              }
            }
          </FormattedNumberParts>
        </Variant>
      </Component>
      <Component name="FormattedDate">
        <Variant>
          <FormattedDate
              value={new Date()}
              year="numeric"
              month="long"
              day="2-digit"
          />
        </Variant>
      </Component>
      <Component name="FormattedDateParts">
        <Variant>
          <FormattedDateParts
              value={new Date()}
              year="numeric"
              month="long"
              day="2-digit"
          >
            {
              (parts) => {
                return (
                    <>
                      {parts.map((part) => {
                        return part.value
                      })}
                    </>
                )
              }
            }
          </FormattedDateParts>
        </Variant>
      </Component>
      <Component name="FormattedTime">
        <Variant>
          <FormattedTime
              value={new Date()}
              hour="numeric"
              minute="numeric"
              hour12={false}
          />
        </Variant>
      </Component>
      <Component name="FormattedTimeParts">
        <Variant>
          <FormattedTimeParts
              value={new Date()}
              hour="numeric"
              minute="numeric"
              hour12={false}
          >
            {
              (parts) => {
                return (
                    <>
                      {parts.map((part) => {
                        return part.value
                      })}
                    </>
                )
              }
            }
          </FormattedTimeParts>
        </Variant>
      </Component>
      <Component name="FormattedDateTimeRange">
        <Variant>
          <FormattedDateTimeRange
              from={new Date('2020-1-1')}
              to={new Date('2020-1-15')}
          />
        </Variant>
      </Component>
      <Component name="FormattedRelativeTime">
        <Variant>
          <FormattedRelativeTime
              value={0}
              numeric="auto"
              updateIntervalInSeconds={1}
          />
        </Variant>
      </Component>
      <Component name="useIntl">
        <Variant proto={UseIntlProto}/>
        <Variant name="format number" proto={UseIntlFormatNumberProto}/>
        <Variant name="format date" proto={UseIntlFormatDateProto}/>
        <Variant name="format time" proto={UseIntlFormatTimeProto}/>
        <Variant name="format date time range" proto={UseIntlFormatTimeProto}/>
        <Variant name="format list" proto={UseIntlFormatListProto}/>
      </Component>
    </Category>
  </Palette>
);
