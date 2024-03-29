import React from "react";

const Star = () => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by 78k+ Happy Users
          </h2>

          <p class="mt-4 text-gray-500 sm:text-xl">
            We take pride in serving a wide range of eCommerce businesses,
            delivering dependable solutions and ensuring secure transactions.
          </p>
        </div>

        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Total Sales
              </dt>

              <dd class="text-4xl font-extrabold text-blue-500 md:text-5xl">
                $4.8m
              </dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Official Addons
              </dt>

              <dd class="text-4xl font-extrabold text-blue-500 md:text-5xl">
                24
              </dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">
                Total Addons
              </dt>

              <dd class="text-4xl font-extrabold text-blue-500 md:text-5xl">
                86
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Star;
