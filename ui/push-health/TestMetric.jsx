import React from 'react';
import PropTypes from 'prop-types';

import ClassificationGroup from './ClassificationGroup';
import UnsupportedGroup from './UnsupportedGroup';
import Metric from './Metric';
import { filterTests } from './helpers';

export default class TestMetric extends React.PureComponent {
  render() {
    const {
      data,
      repo,
      revision,
      user,
      notify,
      currentRepo,
      expanded,
      setExpanded,
      searchStr,
      showParentMatches,
    } = this.props;
    const { name, result, details } = data;
    const {
      likelyRregressions,
      likelyIntermittents,
      knownIssues,
      unsupported,
    } = details;
    let filteredLikelyIntermittents = likelyIntermittents;
    let filteredLikelyRegressions = likelyRregressions;
    let filteredIntermittent = knownIssues;

    if (searchStr.length || !showParentMatches) {
      filteredLikelyIntermittents = filterTests(
        likelyIntermittents,
        searchStr,
        showParentMatches,
      );
      filteredLikelyRegressions = filterTests(
        likelyRregressions,
        searchStr,
        showParentMatches,
      );
      filteredIntermittent = filterTests(
        knownIssues,
        searchStr,
        showParentMatches,
      );
    }

    return (
      <Metric
        name={name}
        result={result}
        expanded={expanded}
        setExpanded={setExpanded}
      >
        <div className="border-bottom border-secondary">
          <ClassificationGroup
            group={filteredLikelyRegressions}
            name="Likely Regressions"
            repo={repo}
            currentRepo={currentRepo}
            revision={revision}
            className="mb-5"
            headerColor={
              filteredLikelyRegressions.length ? 'danger' : 'darker-secondary'
            }
            unfilteredLength={filteredLikelyRegressions.length}
            user={user}
            hasRetriggerAll
            notify={notify}
          />
          <ClassificationGroup
            group={filteredLikelyIntermittents}
            name="Likely Intermittents"
            repo={repo}
            currentRepo={currentRepo}
            revision={revision}
            className="mb-5"
            headerColor={
              filteredLikelyIntermittents.length ? 'danger' : 'darker-secondary'
            }
            unfilteredLength={filteredLikelyIntermittents.length}
            user={user}
            hasRetriggerAll
            notify={notify}
          />
          <ClassificationGroup
            group={filteredIntermittent}
            name="Known Issues"
            repo={repo}
            currentRepo={currentRepo}
            revision={revision}
            className="mb-5"
            headerColor="darker-secondary"
            unfilteredLength={knownIssues.length}
            expanded={false}
            user={user}
            hasRetriggerAll
            notify={notify}
          />
          <UnsupportedGroup
            group={unsupported}
            name="Unsupported"
            repo={repo}
            revision={revision}
            className="mb-5"
            headerColor="warning"
            currentRepo={currentRepo}
          />
        </div>
      </Metric>
    );
  }
}

TestMetric.propTypes = {
  data: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  repo: PropTypes.string.isRequired,
  currentRepo: PropTypes.object.isRequired,
  revision: PropTypes.string.isRequired,
  notify: PropTypes.func.isRequired,
  setExpanded: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  searchStr: PropTypes.string.isRequired,
  showParentMatches: PropTypes.bool.isRequired,
};
