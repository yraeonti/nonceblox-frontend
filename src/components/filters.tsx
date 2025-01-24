"use client";
import {
  Flex,
  Group,
  Input,
  InputAddon,
  Stack,
  createListCollection,
  ListCollection,
} from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { Button } from "./ui/button";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { Field } from "./ui/field";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";
import { Inputs } from "@/lib/dto";

const coins = createListCollection({
  items: [
    {
      value: "bitcoin",
      label: "bitcoin",
    },
    {
      value: "ethereum",
      label: "ethereum",
    },
    {
      value: "solana",
      label: "solana",
    },
  ],
});

const currency = createListCollection({
  items: [
    {
      value: "usd",
      label: "US dollar",
    },
    {
      value: "aud",
      label: "Australian dollar",
    },
    {
      value: "ngn",
      label: "Nigerian naira",
    },
  ],
});

export default function Filters({
  defaultValues,
  setOptions,
}: {
  defaultValues: Inputs;
  setOptions: (opts: Inputs) => void;
}) {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>({
    defaultValues: {
      ...defaultValues,
      from: moment.unix(defaultValues.from as number).format("YYYY-MM-DD"),
      to: moment.unix(defaultValues.to as number).format("YYYY-MM-DD"),
    },
  });

  const onSubmit = (data: Inputs) => {
    setOptions(data);
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <Stack width={"full"}>
        <Flex
          width={"full"}
          gap={2}
          flexDirection={"column"}
          md={{ flexDirection: "row" }}
        >
          <SelectForm
            name="coin"
            label="Select Coin"
            control={control}
            errors={errors}
            data={coins}
          />
          <SelectForm
            name="currency"
            label="Select Currency"
            control={control}
            errors={errors}
            data={currency}
          />
        </Flex>

        <Group flexWrap={"wrap"}>
          <Stack></Stack>
          <Group attached>
            <InputAddon>From:</InputAddon>
            <Field invalid={!!errors.from} errorText={errors.from?.message}>
              <Input
                {...register("from", {
                  required: true,
                  setValueAs: (value) => moment(value).unix(),
                })}
                type="date"
                placeholder="From date..."
              />
            </Field>
          </Group>

          <Group attached>
            <InputAddon>To:</InputAddon>
            <Field invalid={!!errors.to} errorText={errors.to?.message}>
              <Input
                {...register("to", {
                  required: true,
                  setValueAs: (value) => moment(value).unix(),
                })}
                type="date"
                placeholder="To date..."
              />
            </Field>
          </Group>
        </Group>

        <Button type="submit" width={150}>
          submit
        </Button>
      </Stack>
    </form>
  );
}

const SelectForm = ({
  errors,
  control,
  data,
  name,
  label,
}: {
  errors: any;
  control: any;
  data: ListCollection;
  name: keyof Inputs;
  label: string;
}) => {
  return (
    <Field
      label={label}
      invalid={!!errors[name]}
      errorText={errors[name]?.message}
    >
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <SelectRoot
            name={field.name}
            value={[field.value]}
            onValueChange={({ value }) => field.onChange(value[0])}
            onInteractOutside={() => field.onBlur()}
            collection={data}
          >
            <SelectTrigger>
              <SelectValueText />
            </SelectTrigger>
            <SelectContent>
              {data.items.map((it) => (
                <SelectItem item={it} key={it.value}>
                  {it.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        )}
      />
    </Field>
  );
};
