---
name: scientific-plotting
description: Creates and reviews reproducible scientific plots from replicate data while preserving provenance, complete experimental configurations, missingness, and limits of interpretation. Use when planning, coding, auditing, or documenting figures for experiments, simulations, or comparison studies.
---

# Scientific Plotting

## When to use this

Use this skill when turning experimental, observational, or simulation results into a figure; reviewing plotting code or an existing figure; or documenting a reproducible figure set. Apply it before choosing aggregations, transformations, or visual encodings so that the plot remains traceable to the underlying observations.

## Actionable steps

1. **Define the figure's scope and supported question.**
   - State what was directly measured or computed, the comparison the figure will show, and the unit of observation.
   - Separate descriptive visualization from evaluation. Do not use a descriptive plot to imply accuracy, scientific quality, or general superiority unless the study design actually evaluates that claim.

2. **Identify authoritative inputs and preserve provenance.**
   - Locate the per-observation or per-run data, the metadata that identifies complete configurations, and the record that establishes study identity and completion status.
   - Prefer authoritative granular data over a precomputed summary. Recalculate displayed summaries from the granular source and, when an official summary exists, cross-check matching values.
   - Record source paths or identifiers, source hashes or immutable versions, software and plotting-library versions, and the code or recipe used to generate the figure.

3. **Audit observations before plotting.**
   - Check identifiers, completion status, units, duplicates, expected replicate counts, and missing fields.
   - Treat missing measurements as missing. Never replace them with zero, silently drop them, or infer unobserved values. Report how many observations contribute to each group and disclose consequential exclusions.

4. **Define groups using complete configurations.**
   - Group by the scientific case and every configuration field that could distinguish conditions, such as method or model version, parameter settings, prompts, capability or instrument settings, processing schema, resource budget, and software or runner version.
   - Do not silently pool configurations. If pooling is scientifically justified, state the rule and preserve enough metadata to recover the original groups.
   - If short labels are needed, provide an explicit mapping from each label to its complete configuration. Keep acquisition or randomized execution order in provenance; choose display order deliberately and record it.

5. **Choose a summary that keeps replicates visible.**
   - By default, plot every replicate and add the median with the observed minimum–maximum range. State the completed replicate count for every group.
   - Use another interval or estimator only when the design and sample size support it, and name it precisely.
   - Do not call a wider observed range inherent variability without an experimental basis. Do not assume that larger counts of outputs, features, citations, events, or operations indicate better performance.

6. **Respect accounting relationships.**
   - Determine whether plotted quantities are totals, components of a total, or classifications within another quantity before combining or stacking them.
   - Never stack overlapping categories as if they were independent. Independently calculated group summaries are generally not additive; for an additive display, combine or stack components within each observation first, then summarize the resulting per-observation totals.

7. **Use transformations only with justification.**
   - Default to the original measured scale and linear axes.
   - Use logarithms, normalization, ratios, fitted curves, smoothing, derived efficiency metrics, or other transformations only when explicitly requested or supported by a stated scientific reason.
   - Define every derived quantity, including its denominator and units, in the plotting recipe and figure documentation. Retain the untransformed values so the transformation can be audited.

8. **Build the figure and constrain its language.**
   - Label axes with quantities and units, make individual observations distinguishable, and use encodings and legends that expose rather than conceal grouping.
   - Write captions and annotations as direct observations bounded by the displayed data and sample, for example, “Condition A had a lower median in these runs.”
   - Do not present causal, accuracy, quality, or general-efficiency claims without a suitable evaluation design. Correlation alone does not establish causation.

9. **Make regeneration part of the deliverable.**
   - Save executable plotting code or a precise recipe, explicit configuration and display order, style settings, data-selection rules, transformations, and export settings.
   - Record the data snapshot or hashes, generation time, environment versions, and output filenames in a manifest or adjacent notes.
   - Generate exports from code rather than manual chart edits, and keep generated files linked to the exact inputs and recipe that produced them.

## Verification steps

1. Trace each plotted mark and summary back to authoritative granular observations and a complete configuration.
2. Compare group membership and replicate counts with the study metadata; confirm that missing values remain missing and that exclusions are disclosed.
3. Independently recalculate a sample of displayed medians, ranges, totals, and derived quantities; cross-check official summaries where available.
4. Confirm that stacked or combined values are mutually exclusive components calculated at the observation level.
5. Search the recipe and figure for transformations, pooling, filters, and reordered categories; verify that each is explicit and justified.
6. Review captions, labels, and notes for claims that exceed the study design or confuse correlation with causation.
7. Regenerate the figure from the recorded inputs in a clean output location and confirm that the expected files, labels, configuration order, and provenance record are produced without manual edits.
8. Inspect the exports at their intended size for legibility, correct units, visible replicates, distinguishable groups, and accessible color or symbol choices.

## Notes: mistakes this skill is intended to prevent

- Losing data lineage by plotting an unexplained spreadsheet or copied summary.
- Pooling materially different cases or configurations behind one label.
- Hiding small sample sizes or replicate-level disagreement behind bars or means alone.
- Converting absent measurements to zero or silently deleting incomplete observations.
- Applying log scales, normalization, ratios, fits, or efficiency metrics because they look persuasive rather than because they answer a justified question.
- Double-counting nested or overlapping quantities, or adding independently computed medians.
- Treating output volume as quality, an observed range as proven stochastic variance, or correlation as causation.
- Turning a bounded observation into an unsupported claim about accuracy, scientific merit, or general performance.
- Producing a figure that cannot be regenerated from recorded data, code, configuration, and environment information.
